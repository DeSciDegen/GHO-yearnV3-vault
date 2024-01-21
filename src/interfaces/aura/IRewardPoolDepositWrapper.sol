// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {IERC20} from "@openzeppelin/contracts/interfaces/IERC20.sol";
import {IVault} from "@balancer/interfaces/contracts/vault/IVault.sol";

interface IRewardPoolDepositWrapper {
    function depositSingle(
        address _rewardPoolAddress,
        IERC20 _inputToken,
        uint256 _inputAmount,
        bytes32 _balancerPoolId,
        IVault.JoinPoolRequest memory _request
    ) external;
}
