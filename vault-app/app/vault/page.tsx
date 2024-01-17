"use client";
import React from "react";
import { NavigationMenuDemo } from "../components/nav";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import { BanknotesIcon } from "@heroicons/react/24/solid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Deposit from "../components/util/deposit";
import Withdraw from "../components/util/withdraw";
import AprDescriptionData from "../components/util/APR-description-data";
import FeesData from "../components/util/Fees-Data";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Vault = () => {
  return (
    <>
      <NavigationMenuDemo />

      <Card className="relative max-w-screen-xl mx-auto border border-border rounded-radius my-8 bg-white overflow-hidden  dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50 to-transparent dark:from-indigo-950 z-0"></div>
        <div className="relative z-10">
          <div className="flex justify-between items-start">
            <a
              href="/"
              className="hover:text-gray-400 font-light py-2 px-4 inline-flex items-center"
            >
              <ArrowLongLeftIcon className="flex-shrink-0 h-6" /> Back to vaults
            </a>
          </div>
          <CardHeader>
            <Avatar className="mx-auto w-16 h-16">
              <AvatarImage src="https://s2.coinmarketcap.com/static/img/coins/64x64/23508.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <CardTitle className="text-center font-extrabold text-5xl">
              GHO Vault
            </CardTitle>
            <CardDescription className="text-center">
              0xA013Fbd4b711f9ded6fB09C1c0d358E2FbC2EAA0
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center mx-auto text-xl flex items-center justify-center mb-10 ">
              <p className="font-bold mr-3">PlaceHolder</p>
              <span className="bg-purple-100 text-purple-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-100 ml-3">
                Ethereum Network
              </span>
              <p className="text-green-500 ml-3">⚡️ Boosted</p>
            </div>
            <div className="text-center mt-4 grid grid-cols-4 gap-4 justify-center items-center">
              <div>
                <p className="font-normal">Total deposited GHO:</p>
                <p className="font-extrabold text-2xl">796.29K </p>
                <p className="font-light text-sm mt-2">$ 796,009.08</p>
              </div>
              <div>
                <p className="font-normal">Historical APR</p>
                <p className="font-extrabold text-2xl">35.10%</p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <p className="font-light text-sm mt-2">
                        Est. APR: 19% ℹ️
                      </p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Estimated APR for the next period based on current data.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div>
                <p className="font-normal">Balance, GHO</p>
                <p className="font-extrabold text-2xl">0.00 GHO</p>
                <p className="font-light text-sm mt-2">$0.00</p>
              </div>
              <div>
                <p className="font-normal">Value in USDC</p>
                <p className="font-extrabold text-2xl">0.00 USDC</p>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <p className="font-light text-sm mt-2">$0.00 ℹ️</p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Your yield is accruing every single block. Awesome!</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>

      <Card className="max-w-screen-xl mx-auto dark:bg-gray-900 text-card-foreground border border-border rounded-radius my-8 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <CardHeader>
          <Tabs defaultValue="deposit">
            <TabsList>
              <TabsTrigger value="deposit">Deposit </TabsTrigger>
              <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
            </TabsList>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost">⚙️</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Max Loss</h4>
                    <p className="text-sm text-muted-foreground">
                      Maximum acceptable loss when withdrawing from vaults.
                    </p>
                  </div>

                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Input id="width" defaultValue="100%" />
                      <Input id="width" defaultValue="100%" />
                      <Input id="width" defaultValue="100%" />
                    </div>
                    <hr className="py-3 mt-2" />
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">
                        Zap Provider & slippage
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        When you want to deposit/withdraw a token that is not
                        supported by the vault, we will use this provider to
                        swap it to a supported token.
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-light">
                        Submit an order via Portals (0.3% fee).
                      </p>
                      <Input />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Input id="maxWidth" defaultValue="300px" />
                      <Input id="maxWidth" defaultValue="300px" />
                      <Input id="maxWidth" defaultValue="300px" />
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <TabsContent value="deposit">
              <Deposit />
            </TabsContent>
            <TabsContent value="withdraw">
              <Withdraw />
            </TabsContent>
          </Tabs>
        </CardHeader>

        <hr className="mb-3" />
        <CardFooter>
          <Tabs defaultValue="about">
            <TabsList>
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="vaults">Vaults</TabsTrigger>
              <TabsTrigger value="info">Info </TabsTrigger>
            </TabsList>
            <TabsContent value="about">
              <div className="grid grid-cols-2 mt-5  gap-28">
                <div>
                  {" "}
                  <p className="font-bold mb-3">Description:</p>
                  <p>
                    Multi strategy vaults are (wait for it) vaults that contain
                    multiple strategies. Multi strategy vaults give the vault
                    creator flexibility to balance risk and opportunity across
                    multiple different strategies.
                  </p>
                </div>

                <div>
                  <AprDescriptionData />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="vaults">More vaults coming soon.</TabsContent>
            <TabsContent value="info">
              <div className="mt-10">
                <p>
                  Vault Contract Address:{" "}
                  <span className="font-bold">
                    0xA013Fbd4b711f9ded6fB09C1c0d358E2FbC2EAA0
                  </span>
                </p>

                <p className="mt-3">
                  Token Contract Address:{" "}
                  <span className="font-bold">
                    0xA013Fbd4b711f9ded6fB09C1c0d358E2FbC2EAA0
                  </span>
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardFooter>
      </Card>
    </>
  );
};

export default Vault;
