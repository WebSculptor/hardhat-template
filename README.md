# HARDHAT PROJECT TEMPLATE

Since it takes a while to scarfold a new hardhat project—as we all know—I've given you this code; all you have to do is follow the instructions.

Clone the repo and install the neccessary packages

```shell
git clone https://github.com/WebSculptor/hardhat-template
npm install
```

Nothing has to be touched in the `hardhat.comfig.ts` file because I've already configured it. This is how it appears.

```ts
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const {
  YOUR_ALCHEMY_MAINNET_API_URL,
  YOUR_ALCHEMY_SEPOLIA_API_URL,
  YOUR_METAMASK_ACCOUNT_PRIVATE_KEY,
  YOUR_ALCHEMY_MUMBAI_API_URL,
} = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  gasReporter: {
    gasPrice: 10000000000,
  },
  networks: {
    hardhat: {
      forking: {
        url: YOUR_ALCHEMY_MAINNET_API_URL!,
      },
    },
    sepolia: {
      url: YOUR_ALCHEMY_SEPOLIA_API_URL!,
      accounts: [YOUR_METAMASK_ACCOUNT_PRIVATE_KEY!],
    },
    mumbai: {
      url: YOUR_ALCHEMY_MUMBAI_API_URL!,
      accounts: [YOUR_METAMASK_ACCOUNT_PRIVATE_KEY!],
    },
  },
};

export default config;
```

Create a `.env` file, and insert this code into it.

```shell
YOUR_ALCHEMY_MAINNET_API_URL="<your-alchemy-mainnet-api-url>"
YOUR_ALCHEMY_SEPOLIA_API_URL="<your-alchemy-sepolia-api-url>"
YOUR_METAMASK_ACCOUNT_PRIVATE_KEY="<your-metamask-account-private-key>"
YOUR_ALCHEMY_MUMBAI_API_URL="<your-alchemy-mumbai-api-url>"
```

To obtain your alchemy keys, register [here](https://www.alchemy.com/) and follow the instructions.

1. Go to your dashboard and click on `view all apps`.
   <img src="./assets/Alchemy Dashboard.png" width="128"/>
