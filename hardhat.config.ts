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
