// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

interface ICurvePool {
    function get_virtual_price() external view returns (uint256);

    function calc_token_amount(
        uint256[2] calldata _amounts,
        bool _is_deposit
    ) external view returns (uint256);

    function calc_token_amount(
        address _pool,
        uint256[4] calldata _amounts,
        bool _is_deposit
    ) external view returns (uint256);

    function add_liqudity(
        uint256[2] calldata _amounts,
        uint256 _min_mint_amount
    ) external returns (uint256);

    function add_liqudity(
        uint256[2] calldata _amounts,
        uint256 _min_mint_amount,
        address receiver
    ) external returns (uint256);

    function remove_liqudity_one_coin(
        uint256 _token_amount,
        int128 i,
        uint256 _min_amount
    ) external returns (uint256);

    function balanceOf(address) external returns (uint256);
}
