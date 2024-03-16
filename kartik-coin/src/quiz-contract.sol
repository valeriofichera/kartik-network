// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IKartikCoin {
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function transfer(address to, uint256 amount) external returns (bool);
}

contract QuizContract {
    address public owner;
    IKartikCoin public kartikCoin;

    constructor(address _kartikCoinAddress) {
        owner = msg.sender;
        kartikCoin = IKartikCoin(_kartikCoinAddress);
    }

    function correctAnswer(address UserSafeAddress) external {
        uint256 amount = 420 * 10 ** 18;
        kartikCoin.transfer(address(UserSafeAddress), amount);
        
    }
}
