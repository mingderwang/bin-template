
'use strict'

const cryptoKeys = require('libp2p-crypto/src/keys')
const argv = require('minimist')(process.argv.slice(2))

async function main () {
  let opts = {
    keyType: argv.type || 'RSA',
    bits: argv.bits || 2048
  }
  const key = await cryptoKeys.generateKeyPair(opts.keyType, opts.bits)
  console.log(key)
}

main()

