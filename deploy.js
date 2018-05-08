const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

// wow!! - bytecode needs to have the 0x hex prefix to deploy
const bytecodeData = '0x' + bytecode;

// need to unlock an account to use for the source of ether for the deployment of the contract
// arguments - account mnemonic + which node to connect to in the network
const provider = new HDWalletProvider(
    '12 word mnemonic...',
    'https://rinkeby.infura.io/KsAC9kkwIlMDfaC6YzqT'
);

const web3 = new Web3(provider);

//get accounts from web3 instance
//new contract - remember the interface (ABI) is in JSON
//deploy - bytecode (data) and arguments
//send - account
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('using account: ' + accounts[0]);


    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecodeData })
        .send({ from: accounts[0], gas: '1000000' });
    
    console.log(interface);
    console.log('Contract Address: ', result.options.address);
};
deploy();