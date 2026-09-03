import express from 'express'

const app = express()

app.use(function (req, res, next) {
    console.log("MIDDLEWARE RUNNING")


    console.log("MIDDLEWARE RUNghvghfghvgh NING")

    next()
})

app.get('/', (req, res) => {
    console.log("ROUTE RUNNING")
    res.send('Hello World')
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})