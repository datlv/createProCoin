var ProCoin = artifacts.require("./ProCoin.sol");
module.exports = function(deployer) {
	deployer.deploy(ProCoin, [1000000, 'ProCoin', 18, 'PRCN'],  {gas: 1400000});
};
