const asyncHandler = require('express-async-handler')
const Debit = require('../models/transactionModel')


// @desc    Get user debit transactions
// @route   GET /api/debit
// @access  Private
const getDebits = asyncHandler(async (req, res) => {
    const debits = await Debit.find({ userId: req.user.id, type: "debit" })
    res.status(200).json (debits)
  })


  // @desc    Create new debit
// @route   POST /api/debit
// @access  Private
const createDebit = asyncHandler(async (req, res) => {
    const { name, type, category, date, amount } = req.body
  
    if (!name || !type || !date || !amount || !category) {
      res.status(400)
      throw new Error('Please fill all the fields!')
    }
  
    const debit = await Debit.create({
      name,
      type,
      category,
      date,
      amount,
      userId: req.user.id,
    })
  
    res.status(201).json(debit)
  })
  
  // @desc    Delete debit
  // @route   DELETE /api/debit/:id
  // @access  Private
  const deleteDebit = asyncHandler(async (req, res) => {
    const debit = await Debit.findById(req.params.id)
    

    if (!debit) {
      res.status(404)
      throw new Error('Debit not found')
    }

    if (debit.userId.toString() !== req.user.id) {
      res.status(401)
      throw new Error('Not Authorized')
    }
  
    await debit.remove()
  
    res.status(200).json({ success: true })
  })


  
// @desc    Update debit
// @route   PUT /api/debit/:id
// @access  Private
const updateDebit = asyncHandler(async (req, res) => {
    const debit = await Debit.findById(req.params.id)
  
    if (!debit) {
      res.status(404)
      throw new Error('Debit not found')
    }
  
    if (debit.userId.toString() !== req.user.id) {
      res.status(401)
      throw new Error('Not Authorized')
    }
  
    const updatedDebit = await Debit.findByIdAndUpdate(
      req.params.id,
      req.body,
      
    )
  
    res.status(200).json(updatedDebit)
  })


  module.exports = {
    getDebits,
    createDebit,
    deleteDebit,
    updateDebit
  }