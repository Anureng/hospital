export const CONTRACT_ADDRESS = "0x4D231198D5031055cf4d2F8b2325bae43F6CC7F1";
export const CONTRACT_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "patientAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum HealthProtocol.HealthStatus",
        name: "status",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "HealthStatusReported",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "enum HealthProtocol.HealthStatus",
        name: "status",
        type: "uint8",
      },
    ],
    name: "reportHealthStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "patientAddress",
        type: "address",
      },
    ],
    name: "getHealthStatus",
    outputs: [
      {
        internalType: "enum HealthProtocol.HealthStatus",
        name: "",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "patients",
    outputs: [
      {
        internalType: "address",
        name: "patientAddress",
        type: "address",
      },
      {
        internalType: "enum HealthProtocol.HealthStatus",
        name: "status",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "lastReportedTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
