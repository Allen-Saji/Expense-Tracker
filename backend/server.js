const express = require('express')
const dotenv = require('dotenv').config()
require('colors')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

const app = express()
app.listen(port, () => console.log(`Server started on port ${port}`))

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))