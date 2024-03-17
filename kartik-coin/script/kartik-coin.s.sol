// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {Script, console} from "forge-std/Script.sol";
import {KartikCoin} from "../src/kartik-coin.sol";
import {ApeCoin} from "../src/ape-coin.sol";
import {KartikEarlyAdopterNFT} from "../src/kartik-nft.sol";
import {QuizContract} from "../src/quiz-contract.sol";

contract DeployKartikCoin is Script {
    function setUp() public {}

    address DAO = 0x5eeF3Ae9Ca0572dcf151DE3C837f08C4455cd3e9;

    function run() public {
        vm.startBroadcast();
        KartikCoin kartikCoin = new KartikCoin(msg.sender);
        console.log("Kartik Coin deployed at:", address(kartikCoin));
        kartikCoin.transfer(DAO, 69420000000 * 10 ** 18);
        console.log("Kartik Coin send to DAO:", address(DAO));

        ApeCoin apeCoin = new ApeCoin(msg.sender);
        console.log("ApeCoin deployed at:", address(apeCoin));
        apeCoin.transfer(DAO, 69420000000 * 10 ** 18);
        console.log("Kartik Coin send to DAO:", address(DAO));

        KartikEarlyAdopterNFT kartikEarlyAdopterNFT = new KartikEarlyAdopterNFT(msg.sender);
        console.log("NFT contract created", address(kartikEarlyAdopterNFT));

        QuizContract quizContract = new QuizContract(msg.sender);
        console.log("Quiz Contract deployed at:", address(quizContract));
        vm.stopBroadcast();
    }
}
