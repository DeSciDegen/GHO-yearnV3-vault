import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

interface ABIResponse {
  status: string;
  message: string;
  result: string;
}

const WalletStatus: React.FC = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const [tokenBalance, setTokenBalance] = useState<string>("");
  const tokenAddress = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"; // Contract address of token to check balance

  useEffect(() => {
    const fetchABIAndBalance = async () => {
      // Fetch ABI and balance of token
      if (address) {
        try {
          const response = await fetch(
            "https://api-sepolia.etherscan.io/api?module=contract&action=getabi&address=" + // Etherscan API call to get ABI
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

  if (isConnecting)
    return (
      <div>
        Connecting...{" "}
        <svg
          aria-hidden="true"
          className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    );
  if (isDisconnected)
    return (
      <div className="font-bold">
        Disconnected, Please Connect Your Wallet to use the Vault!
      </div>
    );

  return (
    <div>
      <span className="font-semibold flex">
        {" "}
        Wallet Connected Succesfully{" "}
        <CheckCircleIcon className="h-6 ml-1 flex text-green-600" />
      </span>
      Token GHO Balance: {tokenBalance}
    </div>
  );
};

export default WalletStatus;
