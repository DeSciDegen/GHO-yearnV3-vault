# GHO-yearnV3-vault UI Branch
LFGHO ETH Global hackathon project. We aim to build the first yield aggregating vault for GHO token in Ethereum mainnet using Yearn Finance's tokenized V3 vaults. 

This is the UI of GHO-yearnV3-vault, meant to mock and show how our vault contracts would interact with out lightwieght and easy to use Front End built using NextJs 14, Tailwind, ShadcnUI, Family Connect Kit and ethers.js 


The front end was built in aim to show how we could create a clean lightwieght easy to use UI that could show with mock interactions to the blockchain and smart contracts how the vault would work and could be replicated for many other potential v3 vaults. 

To run the front end simply clone the repo branch and run 

```bash
  npm install
```

Then for the Family ConnectKit Wallet you must: 

1. Get a API key from Alchemy, you can do this by making a account and a project 
2. Create a project on Wallet Connect and get a project ID 

Then create a env.local file for your enviroment variables and put your keys in the files like this 

```bash
NEXT_PUBLIC_ALCHEMY_ID=

NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=
```
This should allow the wallet connect using FamilyConnectKit to work and you should be able to run the UI with 

```bash
  npm run dev
```
# Further info:
The deposit and withdraw functions are located in app > components > util 
There you can change the contract addreses to deposit/withdraw from the contract of your choosing, our GHO vault or any v3 vault. 

Inside Components there is a compoent called FetchWalletSatusAndBalance

This component retrieves the user wallet address and the token balance of your choosing. 

The current token is set to GHO's address on sepolia but the address can be changed to any token. 


A mock of the ui has been deployed to Vercel for anyone to see if you dont want to clone the branch 
https://yearn-v3-vault-ui-demo.vercel.app/


