// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0

// Kartik Coin is not directly associated to Kartik Talwar.
// It is a hommage to his mission and contribution to the Ethereum community.

pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @custom:security-contact built at ETHGlobal London 2024
contract ApeCoin is ERC20, ERC20Burnable, ERC20Permit, Ownable {
    constructor(address initialOwner)
        ERC20("ApeCoin", "APE")
        ERC20Permit("KartikCoin")
        Ownable(initialOwner)
    {
        _mint(msg.sender, 69420000000 * 10 ** decimals());
    }
}