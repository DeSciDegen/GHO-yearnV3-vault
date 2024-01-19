import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useAccount } from "wagmi";
import { ethers } from "ethers";

const Withdraw = ({ updateBalance }) => {
  const [amount, setAmount] = useState("");
  const [isWithdrawing, setIsWithdrawing] = useState(false);
  const { isConnected } = useAccount();

  const handleWithdraw = async () => {
    if (!isConnected || !amount) {
      console.error("Wallet not connected or no amount entered");
      alert("Wallet not connected or no amount entered");
      return;
    }

    setIsWithdrawing(true);

    try {
      const vaultContractAddress = "0xdA816459F1AB5631232FE5e97a05BBBb94970c95"; // Replace with your contract address
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      // For the sake of a demo, we will use a hardcoded example ABI
      // but api call or imported JSON file would be here in production
      const contractABI = [
        {
          constant: false,
          inputs: [
            {
              name: "amount",
              type: "uint256",
            },
          ],
          name: "withdraw",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        // Add other functions and events as needed
      ];

      const vaultContract = new ethers.Contract(
        vaultContractAddress,
        contractABI,
        signer
      );

      const withdrawAmount = ethers.utils.parseEther(amount);

      const tx = await vaultContract.withdraw(withdrawAmount);
      await tx.wait();

      console.log("Withdrawal successful");
      // Update component state as needed to reflect the withdrawal
      // ...

      updateBalance(); // Notify the parent component to update the balance

      alert("Withdrawal successful");
    } catch (error) {
      console.error("Error during the withdrawal:", error);
      alert("Error during the withdrawal: " + error.message);
    } finally {
      setIsWithdrawing(false);
    }
  };
  return (
    <div className="grid grid-cols-5 mt-8">
      <div>
        <Label>From Vault</Label>
        <div className="flex h-10 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300">
          <img
            src="https://yearn.fi/_next/image?url=https%3A%2F%2Fassets.smold.app%2Fapi%2Ftoken%2F137%2F0xA013Fbd4b711f9ded6fB09C1c0d358E2FbC2EAA0%2Flogo-32.png%3Ffallback%3Dtrue&w=32&q=75"
            alt="GHO"
            className="h-6 rounded-full w-6 mr-2"
          />
          <span className="text-gray-300 font-semibold mr-2">GHO</span>
          <input
            type="text"
            disabled
            className="flex-1 bg-transparent outline-none"
          />
        </div>
        <p className="font-light text-sm mt-1">You have 0.00 Placeholder</p>
      </div>

      <div className="ml-1">
        <Label>Amount</Label>
        <Input
          type="number"
          placeholder="Enter amount to withdraw"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
        />
        <div className="flex">
          <p className="font-normal flex text-gray-400  text-sm mt-1 mr-10">
            $0.00
          </p>
          <Button variant="secondary" className="flex mt-0.5 h-6">
            Max
          </Button>
        </div>
      </div>
      <div className="mx-auto justify-center items-center">
        <ArrowLongRightIcon className="w-10 h-10 lg:w-20 lg:h-20" />
        <Button
          type="button"
          onClick={handleWithdraw}
          disabled={isWithdrawing}
          className="mt-5 lg:mt-0"
        >
          {isWithdrawing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Withdrawing...
            </>
          ) : (
            "Withdraw"
          )}
        </Button>
      </div>
      <div>
        <Label>To Wallet </Label>
        <div className="flex h-10 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300">
          <img
            src="https://s2.coinmarketcap.com/static/img/coins/64x64/23508.png"
            alt="GHO"
            className="h-6 rounded-full w-6 mr-2"
          />
          <span className="text-gray-300 font-semibold mr-2">GHO</span>
          <input
            type="text"
            disabled
            className="flex-1 bg-transparent outline-none"
          />
        </div>
        <p className="font-normal text-gray-400  text-sm mt-1">10%</p>
      </div>
      <div className="ml-1">
        <Label>You will receive</Label>
        <Input type="number" placeholder="0" />
        <p className="font-normal text-gray-400  text-sm mt-1">$0.00</p>
      </div>
      <div></div>
    </div>
  );
};
export default Withdraw;
