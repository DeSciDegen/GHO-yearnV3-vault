"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WagmiConfig, createConfig, sepolia } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  zkSyncSepoliaTestnet,
  goerli,
  foundry,
  hardhat,
  lineaTestnet,
} from "wagmi/chains";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";
import type { ReactNode } from "react";
import test from "node:test";
const inter = Inter({ subsets: ["latin"] });

const config = createConfig(
  getDefaultConfig({
    alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_ID as string, // or infuraId
    walletConnectProjectId: process.env
      .NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string,
    appName: "GHO Vault",
    appDescription: "GHO Vault using Yearn Fincance V3 Vaults",
    appIcon: "https://family.co/logo.png",

    chains: [sepolia, mainnet, goerli, foundry, hardhat, lineaTestnet],
    // ... other configuration options
  })
);

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <WagmiConfig config={config}>
        <ConnectKitProvider>
          <body className="dark">{children}</body>
        </ConnectKitProvider>
      </WagmiConfig>
    </html>
  );
};

export default RootLayout;
