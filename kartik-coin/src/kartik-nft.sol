// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";

contract KartikEarlyAdopterNFT is ERC1155, Ownable, ERC1155Burnable {
    constructor(address initialOwner)
        ERC1155("https://gold-corporate-swordfish-779.mypinata.cloud/ipfs/QmbGFu9RogQkMNo9ZxAozaVgYHsJTzusnATcP5YCaCMyy4")
        Ownable(initialOwner)
    {}

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }
}
