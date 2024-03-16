const { ENTRYPOINT_ADDRESS_V06, createSmartAccountClient } = require("permissionless");
const { signerToSafeSmartAccount } = require("permissionless/accounts");
const {
  createPimlicoBundlerClient,
  createPimlicoPaymasterClient,
} = require("permissionless/clients/pimlico");
const { createPublicClient, getContract, http, parseEther } = require("viem");
const { gnosis } = require("viem/chains");
const { privateKeyToAccount } = require("viem/accounts");


// its just test APIs
async function main() {

    const bundlerClient = createPimlicoBundlerClient({
        transport: http("https://api.pimlico.io/v1/gnosis/rpc?apikey=39199c31-2493-4ab8-a8b8-5780ebcd2e77"),
        entryPoint: ENTRYPOINT_ADDRESS_V06,
    })
     
    const gasPrices = await bundlerClient.getUserOperationGasPrice()

    
    const publicClient = createPublicClient({
        transport: http("https://rpc.ankr.com/gnosis"),
    });

    const paymasterClient = createPimlicoPaymasterClient({
        transport: http("https://api.pimlico.io/v2/gnosis/rpc?apikey=39199c31-2493-4ab8-a8b8-5780ebcd2e77"),
        entryPoint: ENTRYPOINT_ADDRESS_V06,
    });

    const signer = privateKeyToAccount("0x45b37a71cf2b7df41e472fafc8cd4d72869fa7e8ff8bb4fa662d615dc24c9adb");

    const safeAccount = await signerToSafeSmartAccount(publicClient, {
        entryPoint: ENTRYPOINT_ADDRESS_V06,
        signer: signer,
        saltNonce: 123n, // optional
        safeVersion: "1.4.1",
       // address: "0x...", // optional, only if you are using an already created account
    });

    console.log("Safe account:", safeAccount.address);

    const smartAccountClient = createSmartAccountClient({
        account: safeAccount,
        entryPoint: ENTRYPOINT_ADDRESS_V06,
        chain: gnosis,
        bundlerTransport: http("https://api.pimlico.io/v1/gnosis/rpc?apikey=39199c31-2493-4ab8-a8b8-5780ebcd2e77"),
        middleware: {
            gasPrice: async () => (await bundlerClient.getUserOperationGasPrice()).fast,
            sponsorUserOperation: ({ userOperation }) => {
                return paymasterClient.sponsorUserOperation({
                    userOperation,
                    sponsorshipPolicyId: "sp_material_reptil", // <---
                });
            },
        },
    });

    console.log("test");

    const txHash = await smartAccountClient.sendTransaction({
        to: "0xe2D3C55a61BE30ce58324Be5bd188F1bEAc06f58",
        value: parseEther("0"),
        // Assuming `gasPrices` is defined elsewhere in your code:
        maxFeePerGas: gasPrices.fast.maxFeePerGas, // if using Pimlico
        maxPriorityFeePerGas: gasPrices.fast.maxPriorityFeePerGas, // if using Pimlico
    });

    console.log("Transaction hash:", txHash);
}

main().catch(console.error);
