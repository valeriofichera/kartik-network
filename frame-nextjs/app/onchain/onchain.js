import { ethers } from "ethers";

export async function sendEthToAddress(privateKey, receiverWallet) {
  try {
    // Initialize a provider (consider using an Infura or Alchemy provider for faster speeds)
    const provider = new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/VOjQ4U_ekckuPybEfUvbgG0559Dxly-8");

    // Create a signer from the private key
    const signer = new ethers.Wallet(privateKey, provider);


    // Specify amount of ETH to send (consider using units like "gwei" for smaller amounts)
    const amountToSend = ethers.parseUnits("0.00000001", "ether"); // 0.00000001 ETH

    // Create a transaction object
    const tx = {
      to: receiverWallet,
      value: amountToSend,
    };

    // Send the transaction
    const txResponse = await signer.sendTransaction(tx);

    // Wait for transaction confirmation (optional, but recommended)
    // await txResponse.wait();

    console.log(`Transaction sent: ${txResponse.hash}`);
  } catch (error) {
    console.error("Error sending transaction:", error);
  }
}
