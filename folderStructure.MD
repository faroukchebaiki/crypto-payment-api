backend/
├── src/
│   ├── controllers/
│   │   ├── transactionController.js  # Handles transactions for all cryptos
│   │   ├── merchantController.js    # Merchant management (API keys, wallets)
│   ├── services/
│   │   ├── cryptoService.js         # Generic crypto operations
│   │   ├── btcService.js            # Bitcoin-specific operations
│   │   ├── ethService.js            # Ethereum-specific operations
│   │   ├── solService.js            # Solana-specific operations
│   │   ├── bnbService.js            # Binance-specific operations
│   │   └── xrpService.js            # Ripple-specific operations
│   ├── models/
│   │   ├── Merchant.js              # Updated with multi-wallet and cryptoType support
│   │   ├── Transaction.js           # Tracks transactions with cryptoType
│   ├── routes/
│   │   ├── merchantRoutes.js        # Routes for merchant onboarding
│   │   └── transactionRoutes.js     # Routes for creating and monitoring transactions
│   ├── jobs/
│   │   └── monitorWallets.js        # Periodic wallet monitoring for all cryptos
│   └── utils/
│       ├── encryption.js            # Utility for encrypting wallet private keys
│       └── validation.js            # Crypto-specific validation utilities
└── config/
    ├── dbConfig.js                  # Database configuration
    ├── cryptoConfig.js              # API keys and settings for third-party providers
    └── environment.js               # Environment-specific variables

backend/
├── src/
│   ├── controllers/
│   │   ├── transactionController.js    # Handles all transaction-related operations
│   │   ├── merchantController.js      # Manages merchants and API keys
│   ├── services/
│   │   ├── btcService.js              # Handles Bitcoin-specific operations
│   │   ├── ethService.js              # Ethereum-specific operations
│   │   ├── solService.js              # Solana-specific operations
│   │   ├── bnbService.js              # Binance-specific operations
│   │   ├── xrpService.js              # Ripple-specific operations
│   │   └── walletService.js           # General wallet management for all cryptos
│   ├── models/
│   │   ├── Merchant.js                # Merchants model (updated for multi-wallet support)
│   │   ├── Transaction.js             # Transactions with cryptoType field
│   │   └── MasterWallet.js            # Stores multiple master wallets for each crypto
│   ├── routes/
│   │   ├── merchantRoutes.js          # Routes for merchant onboarding
│   │   └── transactionRoutes.js       # Routes for transaction management
│   ├── jobs/
│   │   └── monitorWallets.js          # Periodic wallet monitoring for payments
│   ├── utils/
│   │   ├── encryption.js              # Encrypt and decrypt wallet private keys
│   │   └── validation.js              # Crypto-specific validation utilities
│   └── config/
│       └── cryptoConfig.js            # Configuration for crypto networks (RPCs, APIs)
└── config/
    └── environment.js                # Environment-specific configurations
