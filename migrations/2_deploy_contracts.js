var sunychain = artifacts.require("./sunychain.sol");

module.exports = function(deployer){
  deployer.deploy(sunychain);
}
