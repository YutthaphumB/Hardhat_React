require("@nomiclabs/hardhat-waffle");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const ALCHEMY_API_KEY = "vFCPZZn_YU3UhcAoQ9nxAwce7Rx01Ri0";

const GOERLI_PRIVATE_KEY = "f4eed3683a0ba1aaa38c11e7a384e56738b01eeaf60f3571d868722068fe933d";

module.exports = {
  solidity: "0.7.3",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${GOERLI_PRIVATE_KEY}`]
    }
  }
};
