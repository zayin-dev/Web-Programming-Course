
const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const app = express()
const port = 3000

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/upload', upload.single('file'), (req, res) => {
    res.send('File uploaded successfully')
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})

