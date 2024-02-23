import { expect } from "chai";
import { ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";

describe("Lock", function () {
  async function deployOneYearLockFixture() {
    const [owner, acct1, acct2] = await ethers.getSigners();

    const YourContractName = await ethers.getContractFactory(
      "YourContractName"
    );
    const your_contract = await YourContractName.deploy();

    return { your_contract, owner, acct1, acct2 };
  }

  describe("Deployment", function () {
    it("should do something", async function () {
      const { your_contract, owner, acct1, acct2 } = await loadFixture(
        deployOneYearLockFixture
      );
    });
  });
});
