const {displayTransactions} = require('../controllers/transactionController')
const {protect} = require('../middleware/authMiddleware')

const express = require('express')
const router = express.Router()

router.get('/', protect,displayTransactions )



module.exports = router