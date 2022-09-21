/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.17',
  hardhat: {
    allowUnlimitedContractSize: true,
    accounts: {
      mnemonic:
        'hire fancy burst fresh gadget theme cloud broom insane screen foster where',
      count: 10,
    },
    mining: {
      auto: true,
      // interval: 10000,
    },
  },
}
