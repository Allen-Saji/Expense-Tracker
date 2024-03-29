const asyncHandler = require('express-async-handler')
const Transaction = require('../models/transactionModel')

const displayTransactions = asyncHandler(async(req,res) => {
    const transactions = await Transaction.find({ userId: req.user.id }).sort({date: -1})
    res.status(200).json (transactions)
})

module.exports = { displayTransactions}