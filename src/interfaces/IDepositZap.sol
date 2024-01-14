// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

interface IDepositZap {
    function add_liquidity(
        address _pool,
        uint256[4] calldata _deposit_amounts,
        uint256 _min_mint_amount,
        address _receiver
    ) external returns (uint256);
}
