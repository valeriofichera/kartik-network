// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script, console} from "forge-std/Script.sol";
import {KartikCoin} from "../src/kartik-coin.sol";

contract KartikCoin is Script {
    function setUp() public {}

    function run() public {
        vm.startBroadcast();
        KartikCoin kartikCoin = new KartikCoin(msg.sender);
        console.log("Kartik Coin deployed at:", address(kartikCoin));
        vm.stopBroadcast();
    }
}
