// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {IERC4626} from "@openzeppelin/contracts/interfaces/IERC4626.sol";

interface IRewardPool4626 is IERC4626 {
    function processIdleRewards() external;

    function rewardRate() external returns (uint256);

    function rewardPerToken() external returns (uint256);

    function rewardTokens() external returns (address[] memory);

    function rewards(address) external returns (uint256);

    function getReward() external;
}
