
'use strict'

const cryptoKeys = require('libp2p-crypto/src/keys')
const argv = require('minimist')(process.argv.slice(2))
const uint8ArrayToString = require('uint8arrays/to-string')

async function main () {
  let opts = {
    keyType: argv.type || 'secp256k1', //"Ed25519" | "RSA" | "secp256k1"
    bits: argv.bits || 2048
  }
  const key = await cryptoKeys.generateKeyPair(opts.keyType, opts.bits)
  console.log('❤️🗝 key => ', key)
  const m = cryptoKeys.marshalPrivateKey(key)
  const um = cryptoKeys.unmarshalPrivateKey(m)
  console.log(um)
  console.log(cryptoKeys.marshalPublicKey(key.public))
  const publickey = await cryptoKeys.marshalPublicKey(key.public)
  console.log(publickey)
  console.log(key.public)
}

main()

