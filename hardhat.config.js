/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")
const fs = require('fs')
const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789"
const projectID = '974244411dac45af8957247ad08db23a'

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectID}`,
      accounts: [privateKey]
    },
    mumbai: {
      url:`https://polygon-mumbai.infura.io/v3/${projectID}`,
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}


