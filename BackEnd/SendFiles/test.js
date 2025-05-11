const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
    res.sendFile('./public/hello.html', {root: __dirname})
})

app.listen(3000)
console.log('Server is running on port 3000')