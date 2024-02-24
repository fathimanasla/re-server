


// require('dotenv')=config()
// const { config } = require('dotenv')
require('dotenv').config()


const express = require('express')

const cors = require('cors')

const reServer = express()

reServer.use(cors())

reServer.use(express.json())

const router = require('./Routes/routes')

require('./dbConnection/connection')

reServer.use(router)

const PORT = 4200 || process.env.PORT

reServer.listen(PORT, () => {
    console.log(`Server is started at ${PORT}`)
})
reServer.get('/', (req, res) => {
    res.send("<h1>Server is Successfully Running!!!!</h1>")
})

reServer.post('/', (req, res) => {
    res.send("<h1>POST request Recieved!!!</h1>")
})