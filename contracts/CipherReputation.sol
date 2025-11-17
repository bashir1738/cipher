// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/// @title CipherReputation - scaffold
/// @notice Records completed work and ratings for freelancers
contract CipherReputation {
    event WorkVerified(address indexed freelancer, address indexed client, string jobId, uint256 timestamp, uint8 rating);
    mapping(address => uint256) public completedJobs;
    mapping(address => uint256) public cumulativeRating; // sum of ratings
    mapping(address => uint256) public ratingCount;

    function recordWork(address _freelancer, string calldata _jobId, uint8 _rating) external {
        // scaffold: should be callable by escrow/validation contract only
        completedJobs[_freelancer]++;
        cumulativeRating[_freelancer] += _rating;
        ratingCount[_freelancer]++;
        emit WorkVerified(_freelancer, msg.sender, _jobId, block.timestamp, _rating);
    }

    function getAverageRating(address _freelancer) external view returns (uint256) {
        if (ratingCount[_freelancer] == 0) return 0;
        return cumulativeRating[_freelancer] / ratingCount[_freelancer];
    }
}
