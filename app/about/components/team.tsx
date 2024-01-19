import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Team = () => {
  return (
    <div className="flex flex-col mt-16 mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
      <div className="flex items-center gap-4">
        <Avatar className="flex">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="font-medium dark:text-white">
          <div>Jose Martinez</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Product Manager
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Avatar className="flex">
          <AvatarImage src="https://avatars.githubusercontent.com/u/94535525?v=4" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="font-medium dark:text-white">
          <div>Tom Jones</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Front End Developer
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Avatar className="flex">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="font-medium dark:text-white">
          <div>Bowen You</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Smart Contract Developer
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Avatar className="flex">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="font-medium dark:text-white">
          <div>David Drob</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Smart Contract Developer
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
