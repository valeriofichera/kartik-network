// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {Script, console} from "forge-std/Script.sol";
import {KartikCoin} from "../src/kartik-coin.sol";
import {QuizContract} from "../src/quiz-contract.sol";

contract DeployKartikCoin is Script {
    function setUp() public {}

    address DAO = 0x023FD79587ca4c1dfd8512b5d374e685D831fa59;

    function run() public {
        vm.startBroadcast();
        KartikCoin kartikCoin = new KartikCoin(msg.sender);
        console.log("Kartik Coin deployed at:", address(kartikCoin));
        kartikCoin.transfer(DAO, 69420000000 * 10 ** 18);
        console.log("Kartik Coin send to DAO:", address(DAO));

        QuizContract quizContract = new QuizContract(msg.sender);
        console.log("Quiz Contract deployed at:", address(quizContract));
        // quiz contract = new quizcontract()
        // kartikCoin.transfer(total.supply)
        vm.stopBroadcast();
    }
}
