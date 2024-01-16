import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PortfolioCard = () => {
  return (
    <Card className="max-w-screen-md mx-auto ">
      <CardHeader>
        <CardTitle>
          Your{" "}
          <span className="underline underline-offset-1 decoration-2 decoration-purple-600 ">
            Portfolio
          </span>
        </CardTitle>
        <CardDescription>Overview of your investments</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-600">Deposited Amount:</p>
            <p className="text-lg font-semibold">GHO 1,000 (Placeholder)</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Earnings:</p>
            <p className="text-lg font-semibold">GHO 50 (Placeholder)</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <p>Last updated: Just now</p>
      </CardFooter>
    </Card>
  );
};

export default PortfolioCard;
