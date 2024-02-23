import { ethers } from "hardhat";

async function main() {
  const amount_to_parse = ethers.parseEther("0.001");

  // if your constructor is taking an argument
  const withArgument = await ethers.deployContract("YourContractName", [
    amount_to_parse,
  ]);
  await withArgument.waitForDeployment();

  // if your constructor is not taking an argument
  const withoutArgument = await ethers.deployContract("YourContractName");
  await withoutArgument.waitForDeployment();

  // console.log(`Contract deployed to ${yourContractName.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
