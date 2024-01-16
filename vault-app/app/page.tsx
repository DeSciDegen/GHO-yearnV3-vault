"use client";
import Image from "next/image";
import { ConnectKitButton } from "connectkit";
import { NavigationMenuDemo } from "./components/nav";
import Hero from "./components/hero";

export default function Home() {
  return (
    <>
      <NavigationMenuDemo />
      <Hero />
    </>
  );
}
