const Web3 = require('web3');

const infuraUrl = 'wss://mainnet.infura.io/ws/v3/cfaf07d8dd324aed9674c84d06bfcb02';
const web3 = new Web3(new Web3.providers.WebsocketProvider(infuraUrl));

web3.eth.subscribe('newBlockHeaders').on('data', async block => {
	console.log(`New block received. Block # ${block.number}`);
	// console.log(block);
});
