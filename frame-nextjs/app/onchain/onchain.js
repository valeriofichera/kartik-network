const { ethers } = require("ethers");

export async function sendEthToBurnAddress(privateKey) {
    // Initialize provider
    const provider = new ethers.providers.JsonRpcProvider("https://sepolia.etherscan.io");

    // Create wallet instance from private key
    const wallet = new ethers.Wallet(privateKey, provider);

    // Specify burn address
    const burnAddress = "0x0000000000000000000000000000000000000000";

    // Specify amount of ETH to send
    const amountToSend = ethers.utils.parseEther("0.00000001"); // Change the value as needed

    // Create transaction object
    const tx = {
        to: burnAddress,
        value: amountToSend,
    };

    // Sign and send transaction
    const txResponse = await wallet.sendTransaction(tx);

    // Wait for transaction confirmation
    await txResponse.wait();

    console.log(`Transaction sent: ${txResponse.hash}`);
}
