const express = require('express')
const app = express()

const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT
const url = process.env.DB_NAME

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(url).then(() => {
    console.log('db connected')
})

const userRoutes = require('./routes/userRoutes')


app.use('/user', userRoutes)

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})