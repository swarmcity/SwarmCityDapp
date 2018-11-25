window.contractsData = {
  mainSwtToken: {
    address: "0xb9e7f8568e08d5659f5d29c4997173d84cdf2607",
    creationBlock: 3055641,
    abi: [
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_spender", type: "address" },
          { name: "_amount", type: "uint256" }
        ],
        name: "approve",
        outputs: [{ name: "success", type: "bool" }],
        payable: false,
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "creationBlock",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_from", type: "address" },
          { name: "_to", type: "address" },
          { name: "_amount", type: "uint256" }
        ],
        name: "transferFrom",
        outputs: [{ name: "success", type: "bool" }],
        payable: false,
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [{ name: "", type: "uint8" }],
        payable: false,
        type: "function"
      },
      {
        constant: false,
        inputs: [{ name: "_newController", type: "address" }],
        name: "changeController",
        outputs: [],
        payable: false,
        type: "function"
      },
      {
        constant: true,
        inputs: [
          { name: "_owner", type: "address" },
          { name: "_blockNumber", type: "uint256" }
        ],
        name: "balanceOfAt",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "version",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_cloneTokenName", type: "string" },
          { name: "_cloneDecimalUnits", type: "uint8" },
          { name: "_cloneTokenSymbol", type: "string" },
          { name: "_snapshotBlock", type: "uint256" },
          { name: "_transfersEnabled", type: "bool" }
        ],
        name: "createCloneToken",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        type: "function"
      },
      {
        constant: true,
        inputs: [{ name: "_owner", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "balance", type: "uint256" }],
        payable: false,
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "parentToken",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_owner", type: "address" },
          { name: "_amount", type: "uint256" }
        ],
        name: "generateTokens",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        type: "function"
      },
      {
        constant: true,
        inputs: [{ name: "_blockNumber", type: "uint256" }],
        name: "totalSupplyAt",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_to", type: "address" },
          { name: "_amount", type: "uint256" }
        ],
        name: "transfer",
        outputs: [{ name: "success", type: "bool" }],
        payable: false,
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "transfersEnabled",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "parentSnapShotBlock",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_spender", type: "address" },
          { name: "_amount", type: "uint256" },
          { name: "_extraData", type: "bytes" }
        ],
        name: "approveAndCall",
        outputs: [{ name: "success", type: "bool" }],
        payable: false,
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_owner", type: "address" },
          { name: "_amount", type: "uint256" }
        ],
        name: "destroyTokens",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        type: "function"
      },
      {
        constant: true,
        inputs: [
          { name: "_owner", type: "address" },
          { name: "_spender", type: "address" }
        ],
        name: "allowance",
        outputs: [{ name: "remaining", type: "uint256" }],
        payable: false,
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "tokenFactory",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        type: "function"
      },
      {
        constant: false,
        inputs: [{ name: "_transfersEnabled", type: "bool" }],
        name: "enableTransfers",
        outputs: [],
        payable: false,
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "controller",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        type: "function"
      },
      {
        inputs: [
          { name: "_tokenFactory", type: "address" },
          { name: "_parentToken", type: "address" },
          { name: "_parentSnapShotBlock", type: "uint256" },
          { name: "_tokenName", type: "string" },
          { name: "_decimalUnits", type: "uint8" },
          { name: "_tokenSymbol", type: "string" },
          { name: "_transfersEnabled", type: "bool" }
        ],
        payable: false,
        type: "constructor"
      },
      { payable: true, type: "fallback" },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "_from", type: "address" },
          { indexed: true, name: "_to", type: "address" },
          { indexed: false, name: "_amount", type: "uint256" }
        ],
        name: "Transfer",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "_cloneToken", type: "address" },
          { indexed: false, name: "_snapshotBlock", type: "uint256" }
        ],
        name: "NewCloneToken",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "_owner", type: "address" },
          { indexed: true, name: "_spender", type: "address" },
          { indexed: false, name: "_amount", type: "uint256" }
        ],
        name: "Approval",
        type: "event"
      }
    ]
  },
  kovSwtToken: {
    address: "0xf69ca736d959519a79f9075021444a8a0ee384d3",
    creationBlock: 8420473,
    abi: [{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"transferAndCall","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_to","type":"address"}],"name":"claimTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getTokenInterfacesVersion","outputs":[{"name":"major","type":"uint64"},{"name":"minor","type":"uint64"},{"name":"patch","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"burner","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"data","type":"bytes"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]
  },
  hashtagDir: {
    address: "0x54423b557a5204f39f4d6fdd170dd27cba8000cb",
    creationBlock: 9475942,
    abi: [{"constant":false,"inputs":[{"name":"_index","type":"uint256"}],"name":"disableHashtag","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_index","type":"uint256"},{"name":"_hashtagName","type":"string"},{"name":"_hashtagMetaIPFS","type":"string"},{"name":"_hashtagAddress","type":"address"}],"name":"updateHashtag","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"numberOfHashtags","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_hashtagName","type":"string"},{"name":"_hashtagMetaIPFS","type":"string"},{"name":"_hashtagAddress","type":"address"}],"name":"addHashtag","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"hashtagListIpfs","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256"}],"name":"readHashtag","outputs":[{"name":"hashtagName","type":"string"},{"name":"hashtagMetaIPFS","type":"string"},{"name":"hashtagAddress","type":"address"},{"name":"hashtagShown","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"hashtagListName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_hashtagListName","type":"string"},{"name":"_hashtagListIpfs","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"hashtagName","type":"string"},{"indexed":false,"name":"hashtagMetaIPFS","type":"string"},{"indexed":false,"name":"hashtagAddress","type":"address"}],"name":"HashtagAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]
  },
  simpleDeal: {
    address: null,
    creationBlock: null,
    abi: [{"constant":true,"inputs":[],"name":"getitemHashes","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ProviderRep","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_payoutAddress","type":"address"}],"name":"setPayoutAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_itemHash","type":"bytes32"},{"name":"_selectedReplier","type":"address"}],"name":"selectReplier","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"itemHashes","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getItemsCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"payoutAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"hashtagName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_itemHash","type":"bytes32"}],"name":"readItemState","outputs":[{"name":"_itemValue","type":"uint256"},{"name":"_seekerRep","type":"uint256"},{"name":"_seekerAddress","type":"address"},{"name":"_itemMetadataHash","type":"bytes32"},{"name":"_creationBlock","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_itemHash","type":"bytes32"}],"name":"readItemData","outputs":[{"name":"status","type":"uint8"},{"name":"providerAddress","type":"address"},{"name":"providerRep","type":"uint256"},{"name":"numberOfReplies","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_itemHash","type":"bytes32"},{"name":"_seekerFraction","type":"uint256"}],"name":"resolveItem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_itemHash","type":"bytes32"}],"name":"fundItem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_itemHash","type":"bytes32"}],"name":"payoutItem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"hashtagMetadataHash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_itemHash","type":"bytes32"}],"name":"readItemMetadataHash","outputs":[{"name":"itemMetadataHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_msgsender","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_fromcontract","type":"address"},{"name":"_extraData","type":"bytes"}],"name":"receiveApproval","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_hashtagMetadataHash","type":"bytes32"}],"name":"setMetadataHash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_itemHash","type":"bytes32"},{"name":"_itemValue","type":"uint256"},{"name":"_itemMetadataHash","type":"bytes32"}],"name":"newItem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_itemHash","type":"bytes32"}],"name":"getItemRepliers","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"deployBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_msgsender","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"onTokenTransfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_itemHash","type":"bytes32"}],"name":"cancelItem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_itemHash","type":"bytes32"}],"name":"getItemRepliesCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"SeekerRep","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_itemHash","type":"bytes32"},{"name":"_index","type":"uint256"}],"name":"getItemReply","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newHashtagFee","type":"uint256"}],"name":"setHashtagFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_itemHash","type":"bytes32"}],"name":"disputeItem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_itemHash","type":"bytes32"},{"name":"_replyMetadataHash","type":"bytes32"}],"name":"replyItem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_itemHash","type":"bytes32"}],"name":"getItemReplies","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"hashtagFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_token","type":"address"},{"name":"_hashtagName","type":"string"},{"name":"_hashtagFee","type":"uint256"},{"name":"_hashtagMetadataHash","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"SeekerRepAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"ProviderRepAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"itemHash","type":"bytes32"},{"indexed":false,"name":"itemMetadataHash","type":"bytes32"},{"indexed":false,"name":"itemValue","type":"uint256"},{"indexed":false,"name":"hashtagFee","type":"uint256"},{"indexed":false,"name":"seekerRep","type":"uint256"}],"name":"NewItem","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"itemHash","type":"bytes32"},{"indexed":false,"name":"replyMetadataHash","type":"bytes32"},{"indexed":false,"name":"provider","type":"address"}],"name":"ReplyItem","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"itemHash","type":"bytes32"},{"indexed":false,"name":"newstatus","type":"uint8"},{"indexed":false,"name":"providerAddress","type":"address"}],"name":"ItemChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"fromcontract","type":"address"},{"indexed":false,"name":"extraData","type":"bytes"}],"name":"ReceivedApproval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"extraData","type":"bytes"}],"name":"OnTokenTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_change","type":"string"}],"name":"HashtagChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]
  }
};
