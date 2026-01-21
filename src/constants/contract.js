export const CONTRACT_ADDRESS = "PASTE_DEPLOYED_CONTRACT_ADDRESS";

export const CONTRACT_ABI = [
  {
    "inputs": [
      { "internalType": "address payable", "name": "receiver", "type": "address" },
      { "internalType": "string", "name": "message", "type": "string" }
    ],
    "name": "addTransaction",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
];
