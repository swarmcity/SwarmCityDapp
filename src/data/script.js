console.log('Hello from a script');

const {PubSub, Web3} = window;

const web3 = new Web3('https://mainnet.infura.io/metamask');

web3.eth.getBlockNumber()
.then(console.log);


PubSub.subscribe('hashtagsChanged', (msg, data) => {
    console.log('hashtagsChanged', msg, data );
});

PubSub.subscribe('SUB-BALANCE', (msg, data) => {
    web3.eth.getBlockNumber()
    .then((blockNumber) => {
        PubSub.publish('BALANCE', {
            data,
            blockNumber,
        });
    });
});
