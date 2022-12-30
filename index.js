const express = require('express')
const expressReactViews = require('express-react-views')
const app = express()

const {PUBLIC_KEY, SECRET_KEY, SERVER_PORT = 3000} = process.env

app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', expressReactViews.createEngine())

app.get('/deprecated-solution', (req, res) => {
    res.render('deprecated-solution', {
        PUBLIC_KEY
    })
})

app.get('/', (req, res) => {
    res.append('Referrer-Policy', 'no-referrer-when-downgrade')
    res.render('main', {
        PUBLIC_KEY
    })
})

app.listen(SERVER_PORT, () => {
    console.log(`Example app listening at http://localhost:${SERVER_PORT}`)
})

