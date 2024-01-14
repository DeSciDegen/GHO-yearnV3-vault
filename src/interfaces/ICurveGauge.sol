// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

interface ICurveGauge {
    function deposit(uint256) external;

    function balanceOf(address) external view returns (uint256);

    function withdraw(uint256) external;

    function claim_rewards(address) external;
}
