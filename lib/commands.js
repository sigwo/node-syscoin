module.exports = {
  addMultiSigAddress: 'addmultisigaddress',
  addNode: 'addnode', // bitcoind v0.8.0+
  aliasClean: 'aliasclean',
  aliasFilter: 'aliasfilter',
  aliasHistory: 'aliashistory',
  aliasInfo: 'aliasinfo',
  aliasList: 'aliaslist',
  aliasNew: 'aliasnew',
  aliasScan: 'aliasscan',
  aliasUpdate: 'aliasupdate',
  backupWallet: 'backupwallet',
  certClean: 'cert_clean',
  certFilter: 'certfilter',
  certHistory: 'certhistory',
  certInfo: 'certinfo',
  certList: 'certlist',
  certNew: 'certnew',
  certScan: 'certscan',
  certTransfer: 'certtransfer',
  certUpdate: 'certupdate',
  createMultiSig: 'createmultisig',
  createRawTransaction: 'createrawtransaction', // bitcoind v0.7.0+
  dataActivate: 'dataactivate',
  dataUpdate: 'dataupdate',
  decodeRawTransaction: 'decoderawtransaction', // bitcoind v0.7.0+
  dumpData: 'dumpdata',
  dumpPrivKey: 'dumpprivkey',
  encryptWallet: 'encryptwallet',
  getAccount: 'getaccount',
  getAccountAddress: 'getaccountaddress',
  getAddedNodeInfo: 'getaddednodeinfo', // bitcoind v0.8.0+
  getAddressesByAccount: 'getaddressesbyaccount',
  getAliasFees: 'getaliasfees',
  getAuxBlock: 'getauxblock',
  getBalance: 'getbalance',
  getBestBlockHash: 'getbestblockhash',
  getBlock: 'getblock',
  getBlockCount: 'getblockcount',
  getBlockHash: 'getblockhash',
  getBlockTemplate: 'getblocktemplate', // bitcoind v0.7.0+
  getConnectionCount: 'getconnectioncount',
  getDifficulty: 'getdifficulty',
  getGenerate: 'getgenerate',
  getHashesPerSec: 'gethashespersec',
  getInfo: 'getinfo',
  getMiningInfo: 'getmininginfo',
  getNetworkHashPs: 'getnetworkhashps',
  getNewAddress: 'getnewaddress',
  getPeerInfo: 'getpeerinfo', // bitcoind v0.7.0+
  getRawMemPool: 'getrawmempool', // bitcoind v0.7.0+
  getRawTransaction: 'getrawtransaction', // bitcoind v0.7.0+
  getReceivedByAccount: 'getreceivedbyaccount',
  getReceivedByAddress: 'getreceivedbyaddress',
  getTransaction: 'gettransaction',
  getTxOut: 'gettxout', // bitcoind v0.7.0+
  getTxOutSetInfo: 'gettxoutsetinfo', // bitcoind v0.7.0+
  getWork: 'getwork',
  getWorkAux: 'getworkaux',
  getWorkEx: 'getworkex',
  help: 'help',
  importPrivKey: 'importprivkey',
  keypoolRefill: 'keypoolrefill',
  listAccounts: 'listaccounts',
  listAddressGroupings: 'listaddressgroupings', // bitcoind v0.7.0+
  listLockUnspent: 'listlockunspent', // bitcoind v0.8.0+
  listReceivedByAccount: 'listreceivedbyaccount',
  listReceivedByAddress: 'listreceivedbyaddress',
  listSinceBlock: 'listsinceblock',
  listTransactions: 'listtransactions',
  listUnspent: 'listunspent', // bitcoind v0.7.0+
  lockUnspent: 'lockunspent', // bitcoind v0.8.0+
  move: 'move',
  offerAccept: 'offeraccept',
  offerAddWhitelist: 'offeraddwhitelist',
  offerClean: 'offer_clean',
  offerClearWhitelist: 'offerclearwhitelist',
  offerFilter: 'offerfilter',
  offerHistory: 'offerhistory',
  offerInfo: 'offerinfo',
  offerLink: 'offerlink',
  offerList: 'offerlist',
  offerNew: 'offernew',
  offerRefund: 'offerrefund',
  offerRemoveWhitelist: 'offerremovewhitelist',
  offerRenew: 'offerrenew',
  offerScan: 'offerscan',
  offerUpdate: 'offerupdate',
  offerWhitelist: 'offerwhitelist',
  sendFrom: 'sendfrom',
  sendMany: 'sendmany',
  sendRawTransaction: 'sendrawtransaction', // bitcoind v0.7.0+
  sendToAddress: 'sendtoaddress',
  setAccount: 'setaccount',
  setData: 'setdata',
  setGenerate: 'setgenerate',
  setMinInput: 'setmininput',
  setTxFee: 'settxfee',
  signMessage: 'signmessage',
  signRawTransaction: 'signrawtransaction', // bitcoind v0.7.0+
  stop: 'stop',
  submitBlock: 'submitblock', // bitcoind v0.7.0+
  validateAddress: 'validateaddress',
  verifyChain: 'verifychain',
  verifyMessage: 'verifymessage',

  /* not listed in help output */
  walletLock: 'walletlock',
  walletPassphrase: 'walletpassphrase',
  walletPassphraseChange: 'walletpassphrasechange'
};
