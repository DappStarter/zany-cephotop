require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen food curve return payment update hunt light army genius'; 
let testAccounts = [
"0xbb08ca3f39eb1f771765ee7d657d4b785cd8f18188b9b27f22daa28fe42ab380",
"0xebd7de169f715074680867307357f5d3f61e06b662a640921b067c6d6c265766",
"0x8b4038cd250fb27cf7041895c008cdeea3e1e16c51811b0c747df3bf77c7f04e",
"0x90f1c7f6d340ba2ec29c0aed48c72e9c8b866160370c91f28420052e314ffc77",
"0xd07a1ed2a7c9bf88118de5ab4a025e34a2f546902c0e69ab3c2c6539cb146005",
"0x6c7a834c7356339a3447ec670b9ea43234ca7ac3035e52cc040cdffd86849666",
"0x66f58c900e5582d02d649b2307535e00d5aa1aff14ec9dee413a8b75e2e59a28",
"0x587d290c680b5a498c738dd7757ec04df6d85f240e6f99de3591ad4fc78dd067",
"0xb301683d568cf6ae57fdea30245a2e89b53a909e8ab9e503aa0d18bf33692964",
"0xc8ae040e31582aef2d41a271577773f4a89e81db117e926f77f207513d7c548c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
