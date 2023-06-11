// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HealthProtocol {
    enum HealthStatus { Unknown, Healthy, Infected, Recovered }

    struct Patient {
        address patientAddress;
        HealthStatus status;
        uint256 lastReportedTimestamp;
    }

    mapping(address => Patient) public patients;

    event HealthStatusReported(address indexed patientAddress, HealthStatus status, uint256 timestamp);

    function reportHealthStatus(HealthStatus status) public {
        Patient storage patient = patients[msg.sender];
        patient.patientAddress = msg.sender;
        patient.status = status;
        patient.lastReportedTimestamp = block.timestamp;

        emit HealthStatusReported(msg.sender, status, block.timestamp);
    }

    function getHealthStatus(address patientAddress) public view returns (HealthStatus, uint256) {
        Patient memory patient = patients[patientAddress];
        return (patient.status, patient.lastReportedTimestamp);
    }
}
