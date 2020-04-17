require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remind concert grace derive surround slab'; 
let testAccounts = [
"0x2e96eeee83e50fd2a7ee4d1c0d1c598201a3f9231a247f5e9a3324550780176b",
"0xe291017d25a8a7a704f81b68c36fba7f49764bdb5c2b82caacc60b51afc3c179",
"0x34e2eace48adb5a9d0a033e4cd0d986b9d5086c9ebac7b3c2b8846ec78c49d99",
"0xda97248eae7b8bd5571937605a05a25cbcf5c79fa785eb2357e5da895b490b1a",
"0x09d559497b04342f09074a3471ea1880326bfda1eb42ad487d920b34e3e47af8",
"0x66fd0e3561e29733399d453b8ba97abbd262251be66fcf2801f5b32afdf7f9df",
"0xd9588429a0c5714efcf9eef68d70fc5eea28f1def60be50ab797e13163bffe3b",
"0x181b97516825010dff8e0979e224b3231146ccfec6bc79b7047886d8c27631e9",
"0xc3a3e1093dbcf86f751181a8860dede3f5f2c4e2c82b12ebfc20f53ab5ca0ee7",
"0x1d0764cb746f4b22d0d04c1b1ba4ef85bc93163cab9a8b6e8ffea51cf3179ca0"
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
