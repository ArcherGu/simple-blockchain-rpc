// import JsonRpc = require('./rpc')
import JsonRpcRequest from './rpc'

interface IRPCOptions {
    rpchost: string
    rpcport: number
    rpcuser: string
    rpcpassword: string
}

export class Client {
    private jsonrpc: JsonRpcRequest

    constructor(option: IRPCOptions) {
        const url: string = `http://${option.rpcuser}:${option.rpcpassword}@${option.rpchost}:${option.rpcport}`
        this.jsonrpc = new JsonRpcRequest(url)
    }

    public async call(methodIn: string, paramsIn: any[]) {
        const method = methodIn
        const params = paramsIn
        return this.jsonrpc.call(method, params)
    }
}
