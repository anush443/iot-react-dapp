import { ethers } from "ethers";
import { abi, contractAddress } from "../constants.js";

export const Connect = async () => {
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  } else {
    console.log("Metamask not installed");
    return;
  }
};

export const readStats = async () => {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      let { temperature, humidity, moisture } = await contract.readStats();
      temperature = temperature / 10000;
      humidity = humidity / 10000;
      moisture = moisture / 10000;

      return {
        temperature: temperature.toString(),
        humidity: humidity.toString(),
        moisture: moisture.toString(),
      };
    } catch (e) {
      console.log(e);
    }
  }
};

export const getEthInUsd = async () => {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      const transactionResponse = await contract.getUsd();

      return transactionResponse.toString();
    } catch (error) {
      console.log(error);
    }
  }
};

export const updateStats = async (temperature, humidity, moisture) => {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      const transactionResponse = await contract.updateIot(
        temperature,
        humidity,
        moisture
      );
      await listenForTransactionMine(transactionResponse, provider);
      console.log("done");
    } catch (error) {
      console.log(error);
    }
  }
};

export const listenForTransactionMine = (transactionResponse, provider) => {
  console.log(`Mining ${transactionResponse.hash}`);
  return new Promise((resolve, reject) => {
    provider.once(transactionResponse.hash, (transactionReceipt) => {
      console.log(
        `Completed with ${transactionReceipt.confirmations} confirmations. `
      );
      resolve();
    });
  });
};
