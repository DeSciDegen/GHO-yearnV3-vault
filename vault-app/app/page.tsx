"use client";
import Image from "next/image";
import { ConnectKitButton } from "connectkit";
import { NavigationMenuDemo } from "./components/nav";
import Hero from "./components/hero";
import PortfolioCard from "./components/potfolio";
import GHOVaultCard from "./components/ghoVaultCard";

export default function Home() {
  return (
    <>
      <NavigationMenuDemo />
      <Hero />

      <div
        className="mb-3"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <ConnectKitButton />
      </div>

      <PortfolioCard />

      <GHOVaultCard />
    </>
  );
}
