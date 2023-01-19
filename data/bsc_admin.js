export default [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "agent_address",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "broker_debt",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "credit_rating",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "email_hash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "mobile_hash",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "broker_address",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "is_settle_debt",
            "type": "bool"
          },
          {
            "internalType": "enum RupeeCashAdmin.AgentStatus",
            "name": "status",
            "type": "uint8"
          }
        ],
        "indexed": false,
        "internalType": "struct RupeeCashAdmin.Agent",
        "name": "agent",
        "type": "tuple"
      }
    ],
    "name": "Add_Agent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "broker_address",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "credit_rating",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "email_hash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "mobile_hash",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "nominee_address",
            "type": "address"
          },
          {
            "internalType": "enum RupeeCashAdmin.BrokerStatus",
            "name": "status",
            "type": "uint8"
          }
        ],
        "indexed": false,
        "internalType": "struct RupeeCashAdmin.Broker",
        "name": "broker",
        "type": "tuple"
      }
    ],
    "name": "Add_Broker",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "traderId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "agent",
        "type": "address"
      }
    ],
    "name": "Add_Trader",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "traderId",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "debt_to_agent",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "credit_rating",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "account_type",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "email_hash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "mobile_hash",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "agent_address",
            "type": "address"
          },
          {
            "internalType": "enum RupeeCashAdmin.TraderStatus",
            "name": "status",
            "type": "uint8"
          }
        ],
        "indexed": false,
        "internalType": "struct RupeeCashAdmin.Trader",
        "name": "trader",
        "type": "tuple"
      }
    ],
    "name": "Add_Trader_Request",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "agent",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "enum RupeeCashAdmin.AgentStatus",
        "name": "status",
        "type": "uint8"
      }
    ],
    "name": "Approve_Agent_Status",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "requestId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Approve_Loan",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "traderId",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "debt_to_agent",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "credit_rating",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "account_type",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "email_hash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "mobile_hash",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "agent_address",
            "type": "address"
          },
          {
            "internalType": "enum RupeeCashAdmin.TraderStatus",
            "name": "status",
            "type": "uint8"
          }
        ],
        "indexed": false,
        "internalType": "struct RupeeCashAdmin.Trader",
        "name": "trader",
        "type": "tuple"
      }
    ],
    "name": "Approve_Trader",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "traderId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "enum RupeeCashAdmin.TraderStatus",
        "name": "status",
        "type": "uint8"
      }
    ],
    "name": "Approve_Trader_Status",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "settlement_id",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "string",
        "name": "private_tx_hash",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "auto_exchange",
        "type": "bool"
      }
    ],
    "name": "Auto_Settlement_Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "traderId",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "debt_to_agent",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "credit_rating",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "account_type",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "email_hash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "mobile_hash",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "agent_address",
            "type": "address"
          },
          {
            "internalType": "enum RupeeCashAdmin.TraderStatus",
            "name": "status",
            "type": "uint8"
          }
        ],
        "indexed": false,
        "internalType": "struct RupeeCashAdmin.Trader",
        "name": "trader",
        "type": "tuple"
      }
    ],
    "name": "Edit_Trader",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "version",
        "type": "uint8"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "broker",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "agent",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "debt",
        "type": "uint256"
      }
    ],
    "name": "Loan_To_Agent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "requestId",
        "type": "uint256"
      }
    ],
    "name": "Reject_Loan",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "agent",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "broker",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Repay_Broker_Debt",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "requestId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "broker",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Request_Loan_For_Broker",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "requestId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "opex_address",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Request_Loan_For_Opex",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "agent_address",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "broker_debt",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "credit_rating",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "email_hash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "mobile_hash",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "broker_address",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "is_settle_debt",
            "type": "bool"
          },
          {
            "internalType": "enum RupeeCashAdmin.AgentStatus",
            "name": "status",
            "type": "uint8"
          }
        ],
        "indexed": false,
        "internalType": "struct RupeeCashAdmin.Agent",
        "name": "agent",
        "type": "tuple"
      }
    ],
    "name": "Set_Agent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "agent",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "enum RupeeCashAdmin.AgentStatus",
        "name": "status",
        "type": "uint8"
      }
    ],
    "name": "Set_Agent_Status",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "enum RupeeCashAdmin.BrokerStatus",
        "name": "status",
        "type": "uint8"
      }
    ],
    "name": "Set_Broker_Status",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "ratio",
        "type": "uint256"
      }
    ],
    "name": "Set_Debt_Settlement_Ratio",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "exchanger",
        "type": "address"
      }
    ],
    "name": "Set_Exchanger",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_gate_keeper",
        "type": "address"
      }
    ],
    "name": "Set_Gate_Keeper",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "debt",
        "type": "uint256"
      }
    ],
    "name": "Set_Max_Trader_Debt_To_Agent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Set_Min_Auto_Settlement_Amount",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Set_My_Autosettlement_Amount",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "Set_Operator",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "opex_wallet",
        "type": "address"
      }
    ],
    "name": "Set_Opex_Wallet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "oracle",
        "type": "address"
      }
    ],
    "name": "Set_Oracle",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "flag",
        "type": "bool"
      }
    ],
    "name": "Set_Other_Whitelisted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "traderId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "enum RupeeCashAdmin.TraderStatus",
        "name": "status",
        "type": "uint8"
      }
    ],
    "name": "Set_Trader_Status",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "BUSD",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "JAXRE",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "RupeeCash",
    "outputs": [
      {
        "internalType": "contract IRupeeCash",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "email_hash",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "mobile_hash",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "agent_address",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "credit_rating",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "is_settle_debt",
        "type": "bool"
      }
    ],
    "name": "add_agent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "email_hash",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "mobile_hash",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "broker_address",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "nominee_address",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "credit_rating",
        "type": "uint256"
      }
    ],
    "name": "add_broker",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "email_hash",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "mobile_hash",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "trader_debt_to_agent",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "trader_credit_rating",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "account_type",
        "type": "uint256"
      }
    ],
    "name": "add_trader_request",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "agentCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "agent_addresses",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "agents",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "broker_debt",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "credit_rating",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "email_hash",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "mobile_hash",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "broker_address",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "is_settle_debt",
        "type": "bool"
      },
      {
        "internalType": "enum RupeeCashAdmin.AgentStatus",
        "name": "status",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "agent",
        "type": "address"
      }
    ],
    "name": "approve_agent_status",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "requestId",
        "type": "uint256"
      }
    ],
    "name": "approve_loan",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "traderId",
        "type": "uint256"
      }
    ],
    "name": "approve_trader",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "traderId",
        "type": "uint256"
      }
    ],
    "name": "approve_trader_status",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "auto_exchange",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "auto_settlement",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "settlement_id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "private_tx_hash",
        "type": "string"
      }
    ],
    "name": "auto_settlement_transfer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "autosettlement_amounts",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "brokerCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "broker_addresses",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "brokers",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "credit_rating",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "email_hash",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "mobile_hash",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "nominee_address",
        "type": "address"
      },
      {
        "internalType": "enum RupeeCashAdmin.BrokerStatus",
        "name": "status",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "community_fee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "community_fee_wallet",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "debt_settlement_ratio",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "traderId",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "email_hash",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "mobile_hash",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "trader_credit_rating",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "account_type",
        "type": "uint256"
      }
    ],
    "name": "edit_trader",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "exchanger",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "gate_keeper",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "start",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "count",
        "type": "uint256"
      }
    ],
    "name": "get_all_traders",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "debt_to_agent",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "credit_rating",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "account_type",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "email_hash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "mobile_hash",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "agent_address",
            "type": "address"
          },
          {
            "internalType": "enum RupeeCashAdmin.TraderStatus",
            "name": "status",
            "type": "uint8"
          }
        ],
        "internalType": "struct RupeeCashAdmin.Trader[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "get_traders",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "debt_to_agent",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "credit_rating",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "account_type",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "email_hash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "mobile_hash",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "agent_address",
            "type": "address"
          },
          {
            "internalType": "enum RupeeCashAdmin.TraderStatus",
            "name": "status",
            "type": "uint8"
          }
        ],
        "internalType": "struct RupeeCashAdmin.Trader[]",
        "name": "",
        "type": "tuple[]"
      },
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_rupeeCash",
        "type": "address"
      }
    ],
    "name": "init",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "isWhitelisted",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "is_used_address",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "is_used_mobile_hash",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "is_used_tx_hash",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "loanRequestCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "loanRequests",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "enum RupeeCashAdmin.LoanRequestStatus",
        "name": "status",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "broker_address",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "agent_address",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "debt",
        "type": "uint256"
      }
    ],
    "name": "loan_to_agent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "max_trader_debt_to_agent",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "min_auto_settlement_amount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "operator",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "opex_wallet",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "oracle",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "other_whitelist",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "requestId",
        "type": "uint256"
      }
    ],
    "name": "reject_loan",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "agent_address",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "repay_broker_debt",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "brokerOrOpex",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "request_loan",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "requested_agent_status",
    "outputs": [
      {
        "internalType": "enum RupeeCashAdmin.AgentStatus",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "requested_trader_status",
    "outputs": [
      {
        "internalType": "enum RupeeCashAdmin.TraderStatus",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "agent_address",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "credit_rating",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "is_settle_debt",
        "type": "bool"
      }
    ],
    "name": "set_agent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "email_hash",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "mobile_hash",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "agent_address",
        "type": "address"
      },
      {
        "internalType": "enum RupeeCashAdmin.AgentStatus",
        "name": "status",
        "type": "uint8"
      }
    ],
    "name": "set_agent_status",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "flag",
        "type": "bool"
      }
    ],
    "name": "set_auto_exchange",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "_auto_exchange",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "_auto_settlement",
        "type": "bool"
      }
    ],
    "name": "set_auto_flags",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "flag",
        "type": "bool"
      }
    ],
    "name": "set_auto_settlement",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "broker_address",
        "type": "address"
      },
      {
        "internalType": "enum RupeeCashAdmin.BrokerStatus",
        "name": "status",
        "type": "uint8"
      }
    ],
    "name": "set_broker_status",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "wallet",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "fee",
        "type": "uint256"
      }
    ],
    "name": "set_community_fee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "ratio",
        "type": "uint256"
      }
    ],
    "name": "set_debt_settlement_ratio",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_exchanger",
        "type": "address"
      }
    ],
    "name": "set_exchanger",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_gate_keeper",
        "type": "address"
      }
    ],
    "name": "set_gate_keeper",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_debt",
        "type": "uint256"
      }
    ],
    "name": "set_max_trader_debt_to_agent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "set_min_auto_settlement_amount",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "set_my_autosettlement_amount",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_operator",
        "type": "address"
      }
    ],
    "name": "set_operator",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_opex_wallet",
        "type": "address"
      }
    ],
    "name": "set_opex_wallet",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_oracle",
        "type": "address"
      }
    ],
    "name": "set_oracle",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "flag",
        "type": "bool"
      }
    ],
    "name": "set_other_whitelisted",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "traderId",
        "type": "uint256"
      },
      {
        "internalType": "enum RupeeCashAdmin.TraderStatus",
        "name": "status",
        "type": "uint8"
      }
    ],
    "name": "set_trader_status",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "settlements",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "total_settlement_amounts",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "traderCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "traders",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "debt_to_agent",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "credit_rating",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "account_type",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "email_hash",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "mobile_hash",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "agent_address",
        "type": "address"
      },
      {
        "internalType": "enum RupeeCashAdmin.TraderStatus",
        "name": "status",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]