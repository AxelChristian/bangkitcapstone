const express = require("express")
const { uploadImg } = require('./Handler/ImgAPI')
const app = express()
const port = 8080

const Multer = require('multer')
const imgUpload = require('./Controller/bucketImgController')

const multer = Multer({
    storage: Multer.MemoryStorage,
    fileSize: 5 * 1024 * 1024
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('response from server')
})

app.post('/upload', multer.single('foto'), imgUpload.uploadToGcs, uploadImg)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})