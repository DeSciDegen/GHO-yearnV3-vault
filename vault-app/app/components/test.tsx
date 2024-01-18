import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

interface ABIResponse {
  status: string;
  message: string;
  result: string;
}

const MyComponent: React.FC = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const [tokenBalance, setTokenBalance] = useState<string>("");
  const tokenAddress = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"; // Contract address

  useEffect(() => {
    const fetchABIAndBalance = async () => {
      if (address) {
        try {
          const response = await fetch(
            "https://api-sepolia.etherscan.io/api?module=contract&action=getabi&address=" +
              tokenAddress
          );
          const data: ABIResponse = await response.json();

          if (data.status === "1") {
            const abi = JSON.parse(data.result); // Parse the ABI
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const tokenContract = new ethers.Contract(
              tokenAddress,
              abi,
              provider
            );

            const balance: ethers.BigNumber = await tokenContract.balanceOf(
              address
            );
            setTokenBalance(ethers.utils.formatUnits(balance, 18)); // Assuming 18 decimal places
          } else {
            throw new Error("Failed to load ABI");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
    };

    fetchABIAndBalance();
  }, [address]);

  if (isConnecting) return <div>Connecting...</div>;
  if (isDisconnected) return <div>Disconnected</div>;

  return (
    <div>
      Connected Wallet: {address}
      <br />
      Token Balance: {tokenBalance}
    </div>
  );
};

export default MyComponent;
