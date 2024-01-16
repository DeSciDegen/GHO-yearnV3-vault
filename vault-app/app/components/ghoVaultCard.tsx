import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BoltIcon } from "@heroicons/react/24/solid";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
const GHOVaultCard = () => {
  return (
    <a href="">
      <Card className="hover:shadow-lg hover:scale-105 transition-transform duration-300 max-w-screen-xl mt-20 mx-auto bg-card text-card-foreground border border-border rounded-radius">
        <CardHeader>
          <CardTitle className="flex py-2">
            {" "}
            <Avatar className="flex ">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="mt-2 ml-3"> GHO-crvUSD Vault</span>
          </CardTitle>
          <CardDescription>
            Optimize your yield with detailed insights
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <p className="font-bold">Est. APR</p>
              <p className="flex ">
                <BoltIcon className="flex h-4 w-4 mt-1 mr-1 text-yellow-500" />{" "}
                10% (Placeholder)
              </p>
            </div>
            <div>
              <p className="font-bold flex">
                Hist. APR{" "}
                <ArrowTrendingUpIcon className="flex w-5 h-5 ml-2 text-purple-500" />
              </p>
              <p>9.5% (Placeholder)</p>
            </div>
            <div>
              <p className="font-bold">Available</p>
              <p>GHO 500 (Placeholder)</p>
            </div>
            <div>
              <p className="font-bold">Holdings</p>
              <p>GHO 1,000 (Placeholder)</p>
            </div>
            <div>
              <p className="font-bold">Deposits</p>
              <p>$2M (Placeholder)</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="text-muted-foreground">
          <span className="text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-100">
            Ethereum
          </span>
          <p>Updated a few seconds ago</p>
        </CardFooter>
      </Card>
    </a>
  );
};

export default GHOVaultCard;
