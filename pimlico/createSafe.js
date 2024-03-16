const { ENTRYPOINT_ADDRESS_V06, createSmartAccountClient } = require("permissionless");
const { signerToSafeSmartAccount } = require("permissionless/accounts");
const {
  createPimlicoBundlerClient,
  createPimlicoPaymasterClient,
} = require("permissionless/clients/pimlico");
const { createPublicClient, getContract, http, parseEther } = require("viem");
const { sepolia } = require("viem/chains");
const { privateKeyToAccount } = require("viem/accounts");
const { pimlicoBundlerClient } = require("../pimlicoBundlerClient");

// its just test APIs
async function main() {
    const publicClient = createPublicClient({
        transport: http("https://base-sepolia.g.alchemy.com/v2/qPPGTookiig8SAV7BEqjwjnBf3kIlId3"),
    });

    const paymasterClient = createPimlicoPaymasterClient({
        transport: http("https://api.pimlico.io/v2/8453/rpc?apikey=39199c31-2493-4ab8-a8b8-5780ebcd2e77"),
        entryPoint: ENTRYPOINT_ADDRESS_V06,
    });

    const signer = privateKeyToAccount("");

    const safeAccount = await signerToSafeSmartAccount(publicClient, {
        entryPoint: ENTRYPOINT_ADDRESS_V06,
        signer: signer,
        saltNonce: 0n, // optional
        safeVersion: "1.4.1",
        address: "0x...", // optional, only if you are using an already created account
    });

    const smartAccountClient = createSmartAccountClient({
        account: safeAccount,
        entryPoint: ENTRYPOINT_ADDRESS_V06,
        chain: sepolia,
        bundlerTransport: http("https://api.pimlico.io/v2/8453/rpc?apikey=39199c31-2493-4ab8-a8b8-5780ebcd2e77"),
        middleware: {
            gasPrice: async () => (await pimlicoBundlerClient.getUserOperationGasPrice()).fast,
            sponsorUserOperation: ({ userOperation }) => {
                return paymasterClient.sponsorUserOperation({
                    userOperation,
                    sponsorshipPolicyId: "sp_next_nicolaos", // <---
                });
            },
        },
    });

    const txHash = await smartAccountClient.sendTransaction({
        to: "",
        value: parseEther("0"),
        // Assuming `gasPrices` is defined elsewhere in your code:
        maxFeePerGas: gasPrices.fast.maxFeePerGas, // if using Pimlico
        maxPriorityFeePerGas: gasPrices.fast.maxPriorityFeePerGas, // if using Pimlico
    });

    console.log("Transaction hash:", txHash);
}

main().catch(console.error);
