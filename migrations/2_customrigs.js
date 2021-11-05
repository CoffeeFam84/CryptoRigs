const Customrigs = artifacts.require("Customrigs");

module.exports = function (deployer) {
  deployer.deploy(Customrigs, 'baseURI');
};
