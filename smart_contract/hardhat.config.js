// https://eth-ropsten.alchemyapi.io/v2/WAi021wOy1zq6Rcu12Xk218g0RISlqMm

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: "0.8.0",
  networks:{
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/WAi021wOy1zq6Rcu12Xk218g0RISlqMm',
      accounts: ["fac10cd7a2555d855c2b334010aec9a28fa3b4f31c55f569aded036c889edf10"]
    }
  }
}