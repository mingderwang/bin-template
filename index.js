
'use strict'
const a = require("@transmute/lds-ecdsa-secp256k1-recovery2020")
console.log(a)


const cryptoKeys = require('libp2p-crypto/src/keys')
const argv = require('minimist')(process.argv.slice(2))

async function main () {
  console.log({
    keyType: argv.type,
    bits: argv.bits
  })
}

main()

