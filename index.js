const Web3 = require('web3');
const defaults = require('./defaults')

class OpenLP3 {
    constructor(network_address, contract_address,
        owner_private_key, abi=defaults.abi, transaction=defaults.transaction) {
        this.w3 = new Web3(network_address);
        this.transaction = transaction;
        this.abi = abi;
        this.contract = new this.w3.eth.Contract(this.abi, contract_address);
        this.owner = this.w3.eth.accounts.privateKeyToAccount(owner_private_key);
      }

    async contractInfo (){
        const res = await this.contract.methods.getInfo().call()
        return res;
    }

    version(){
        return "OpenLP3 JS SDK Version 0.1.0"
    }

    async userPoints(userAddress){
        const res = await this.contract.methods.userPoints(userAddress).call()
        return res;
    }

    async issuePoints(userAddress, points){
        const res = await this.contract.methods.issuePoint(userAddress, points).send(
            {
                from: this.owner.address
            }
        )
        return res;
    }

    async burnPoints(userAddress, points){
        const res = await this.contract.methods.burnPoint(userAddress, points).send(
            {
                from: this.owner.address
            }
        )
        return res;
    }
}


module.exports = OpenLP3;