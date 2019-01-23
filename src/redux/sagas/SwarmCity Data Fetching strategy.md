# SwarmCity Data Fetching strategy

## 1. Hashtag basic info
- hashtagName
- metadataHash

### Contract changes

- [x] When the state changes: Fire an event 
```
ItemChange(bytes32 indexed itemHash, status newstatus, address providerAddress)
```

- [x] Change event to
```
event NewItem(address owner, bytes32 itemHash, string ipfsMetadata, uint itemValue, uint hashtagFee, uint seekerRep);
```

- [x] Split readItem into
  - [x] readItemState: ```status, providerAddress, providerRep, numberOfReplies```
  - [x] readItemData: ```itemValue, seekerAddr, seekerRep, ipfsMetadata, creationBlock```

- [x] On item creation, store the ```creationBlock``` in the struct, so it can be returned in the ```readItemData``` call.

https://github.com/swarmcity/SwarmCityContracts/pull/17

## 2. Through Events
> Contract State
> [color=blue]

> Contract Events
> [color=red]

> IPFS cat
> [color=green]


```graphviz
digraph hierarchy {
    node [color=Gray,fontname=Courier,shape=box]
    edge [color=Gray,fontname=Courier]

    // Initial info
    GET_HASHTAG->hashtagAddress
    hashtagAddress->hashtagName [color=blue, label="hashtagName()\n x1"]
    hashtagAddress->hashtagMetadata [color=blue, label="hashtagMetadata()\n x1"]
    hashtagAddress->creationBlock [color=blue, label="creationBlock()\n x1"]
    
    // Metadata
    hashtagMetadata->hashtagMetadataRes [color=green, label="x1"]
    hashtagMetadataRes [label="description, \n ABI"]
    
    // Events
    creationBlock->item [color=red, label="getPastEvents() \n NewItemForTwo\n x1"]
    item [label="itemHash,\n ipfsMetadata,\n itemValue,\n seekerAddr,\n seekerRep,\n blockNumber"]
    
    // Item
    item->itemStatus [color=blue, label="readItem(hash)\n x nºitems"]
    itemStatus [label="status, \n providerAddress, \n numberOfReplies"]
    item->itemMetadataRes [color=green, label="x nºitems"]
    itemMetadataRes [label="seeker, \n avatarHash, \n description, \n publicKey"]
    



}
```

```graphviz
digraph hierarchy {
    node [color=Gray,fontname=Courier,shape=box]
    edge [color=Gray,fontname=Courier]

    // Initial info
    GET_ITEM [label="GET_ITEM, \n itemHash"]
    
    // Reply
    ReplyItemRes->replyMetadataRes [color=green, label="x nºitemReplies"]
    replyMetadataRes [label="description,\n replier(username,\n avatarHash,\n address,\n publicKey)"]
    
    // Item
    GET_ITEM->itemStatus [color=blue, label="readItem(hash)\n x nºitems"]
    itemStatus [label="status, \n ipfsMetadata,\n providerAddr, \n providerRep,\n itemValue,\n **seekerAddr**?,\n seekerRep,\n **blockNumber**?,\n numberOfReplies"]
    itemStatus->itemMetadataRes [color=green, label="x nºitems"]
    itemMetadataRes [label="seeker, \n avatarHash, \n description, \n publicKey"]
    itemStatus->ReplyItemRes [color=red, label="getPastEvents() \n ReplyItem\n x1 onOpenItem"]
    ReplyItemRes [label="ipfsMetadata,\n provider"]



}
```

## 2. Through State
> Contract State
> [color=blue]


> IPFS cat
> [color=green]

```graphviz
digraph hierarchy {
    node [color=Gray,fontname=Courier,shape=box]
    edge [color=Gray,fontname=Courier]

    // Initial info
    hashtagAddress->hashtagName [color=blue, label="hashtagName()\n x1"]
    hashtagAddress->hashtagMetadata [color=blue, label="hashtagMetadata()\n x1"]
    hashtagAddress->itemsCount [color=blue, label="itemsCount()\n x1"]
    itemsCount->itemHash [color=blue, label="itemsHash(i)\n x nºitems"]
    itemHash->itemStatus [color=blue, label="readItem(hash)\n x nºitems"]
    
    // Metadata
    hashtagMetadata->hashtagMetadataRes [color=green, label="x1"]
    hashtagMetadataRes [label="description, \n ABI"]    
    
    // Item
    itemStatus [label="status,\n itemValue,\n providerRep,\n seekerRep,\n providerAddress,\n ipfsMetadata,\n numberOfReplies"]
    itemStatus->itemMetadataRes [color=green, label="x nºitems"]
    itemMetadataRes [label="seeker, \n avatarHash, \n description, \n publicKey"]
    
    // Reply
    itemStatus->reply [color=blue, label="getReply(i)\n x nºreplies"]
    reply [label="provider,\n replyMetadata"]
    reply->replyMetadataRes [color=green, label="x nºreplies"]
    replyMetadataRes [label="description,\n replier(username,\n avatarHash,\n address,\n publicKey)"]



}
```

Reference for the graph code: http://www.tonyballantyne.com/graphs.html
Reference for hackmd features: https://hackmd.io/features?both