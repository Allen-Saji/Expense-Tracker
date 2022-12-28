const express = require('express')
const dotenv = require('dotenv').config()
require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000


const app = express()
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/transactions', require('./routes/transactionRoutes'))
app.use('/api/credit', require('./routes/creditRoutes'))
app.use('/api/debit', require('./routes/debitRoutes'))

// Serve Frontend
if (process.env.NODE_ENV === 'production') {
    // Set build folder as static
    app.use(express.static(path.join(__dirname, '../frontend/build')))
  
    // FIX: below code fixes app crashing on refresh in deployment
    app.get('*', (_, res) => {
      res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
    })
  } else {
    app.get('/', (_, res) => {
      res.status(200).json({ message: 'Welcome to the Expense Tracker API' })
    })
  }

app.use(errorHandler)
app.listen(port, () => console.log(`Server started on port ${port}`))
