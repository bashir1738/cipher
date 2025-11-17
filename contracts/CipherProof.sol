// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/// @title CipherProof - scaffold
/// @notice Stores proof hashes for milestone submissions (minimal scaffold)
contract CipherProof {
    event ProofSubmitted(uint256 indexed escrowId, uint256 indexed milestoneId, address indexed freelancer, string ipfsHash, uint256 timestamp);

    struct Proof {
        uint256 escrowId;
        uint256 milestoneId;
        address freelancer;
        string ipfsHash;
        uint256 timestamp;
    }

    mapping(uint256 => Proof[]) public proofsByEscrow;

    function submitProof(uint256 _escrowId, uint256 _milestoneId, string calldata _ipfsHash) external {
        proofsByEscrow[_escrowId].push(Proof(_escrowId, _milestoneId, msg.sender, _ipfsHash, block.timestamp));
        emit ProofSubmitted(_escrowId, _milestoneId, msg.sender, _ipfsHash, block.timestamp);
    }

    // helper view to get proof count for an escrow
    function getProofCount(uint256 _escrowId) external view returns (uint256) {
        return proofsByEscrow[_escrowId].length;
    }
}
