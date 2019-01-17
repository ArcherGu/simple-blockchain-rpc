# Simple Blockchain RPC

There are actually a lot of similar packages, but I always think they are too complicated. Maybe a small and simple core package will be more suitable for those original projects.

## Install
```
npm i simple-blockchain-rpc
```

## Quick Start

```js
const { Client } = require("simple-blockchain-rpc");

const rpcClient = new Client({
    rpchost: 'Your rpc host',
    rpcport: Your rpc port,
    rpcuser: 'Your rpc username',
    rpcpassword: 'Your rpc password',
})

rpcClient.call('getblockhash', [100]).then(result => {
    console.log(result)
})
```

## License

The code in this project is licensed under MIT license.