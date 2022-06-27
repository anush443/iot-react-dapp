export const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
//rinkeby contract address
//export const contractAddress = "0x128C11cdE87ff2868759A0EE5DfD016465BBE01D";
export const abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "priceFeedAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Iot__NotOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "getUsd",
    outputs: [
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
    inputs: [],
    name: "i_owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceFeed",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "readStats",
    outputs: [
      {
        components: [
          {
            internalType: "int256",
            name: "temperature",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "humidity",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "moisture",
            type: "int256",
          },
        ],
        internalType: "struct Iot.stats",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "_temperature",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "_humidity",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "_moisture",
        type: "int256",
      },
    ],
    name: "updateIot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
