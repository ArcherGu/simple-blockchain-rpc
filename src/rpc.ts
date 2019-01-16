import request = require('request-promise-native')

export default class JsonRpcRequest {
    private url: string
    private id: number

    constructor(url: string) {
        this.url = url
        this.id = 1
    }

    public async call(methodIn: string, paramsIn: any[]) {
        try {
            const response = await request({
                method: 'POST',
                url: this.url,
                json: true,
                body: {
                    jsonrpc: '2.0',
                    id: this.id++,
                    method: methodIn,
                    params: paramsIn,
                },
            })
            return response.result
        } catch (e) {
            console.log(e)
        }
    }
}
