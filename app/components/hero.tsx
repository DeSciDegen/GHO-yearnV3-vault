import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Hero = () => {
  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a
          href="/about"
          className="inline-flex justify-between items-center py-1 px-6 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <span className="text-sm font-medium">How it Works?</span>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          The First{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-violet-400">
            GHO
          </span>{" "}
          Yearn V3 Vault
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Try out the first GHO Yearn V3 Vault and earn yield on your GHO. Built
          using the Yearn Finance V3 Vaults.{" "}
          <span className="font-light italic ">
            Note this is a example UI, features are built out to demo how the UI
            would interact with mainent contracts{" "}
          </span>
          <div className="flex text-center mx-auto justify-center items-center mt-3">
            <a
              href="/href"
              className="flex mr-8 underline font-semibold hover:text-blue-500"
            >
              Vault{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 ml-1 mt-1 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </a>
            <a
              href="/about"
              className="flex underline font-semibold hover:text-blue-500"
            >
              About{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mt-1 ml-1 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </p>
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
      </div>
    </section>
  );
};

export default Hero;
