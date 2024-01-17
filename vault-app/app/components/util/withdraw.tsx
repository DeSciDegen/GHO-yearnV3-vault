import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";

const Withdraw = () => {
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
        <Input type="number" placeholder="0" />
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
        <Button className="mt-5 lg:mt-0">Withdraw</Button>
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
