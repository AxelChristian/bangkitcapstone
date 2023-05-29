const {Storage} = require('@google-cloud/storage');
const fs = require('fs')
const path = require('path');

const pathKey = path.resolve('./serviceAccountKey.json')

const gcs = new Storage({
    projectId: 'capstone-c23-ps442',
    keyFilename: pathKey
})

const bucketName = 'img-aksara-latin'
const bucket = gcs.bucket(bucketName)

module.exports.bucket = bucket
module.exports.bucketName = bucketName