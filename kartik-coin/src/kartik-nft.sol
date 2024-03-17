// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract KartikEarlyAdopterNFT is ERC1155, ERC1155Burnable, Ownable {
    constructor(address initialOwner)
        ERC1155("https://gold-corporate-swordfish-779.mypinata.cloud/ipfs/QmbGFu9RogQkMNo9ZxAozaVgYHsJTzusnATcP5YCaCMyy4")
        Ownable(initialOwner)
    {}

    function mint(address account, uint256 id, uint256 amount, bytes memory data)
        public
        onlyOwner
    {
        _mint(account, id, amount, data);
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
        onlyOwner
    {
        _mintBatch(to, ids, amounts, data);
    }
}