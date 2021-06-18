const express = require('express')
const app = express()

const {PUBLIC_KEY, SECRET_KEY, SERVER_PORT = 3000} = process.env

app.listen(SERVER_PORT, () => {
    console.log(`Example app listening at http://localhost:${SERVER_PORT}`)
})
