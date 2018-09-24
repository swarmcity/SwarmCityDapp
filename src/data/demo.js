
createItem() {

    ipfs.add().then(res => {
        this.state = 'ok'
        sendTx().then(res => {
            this.state = 'done'
        }).catch(err => {
            this.state = 'not'
        })
    })

}