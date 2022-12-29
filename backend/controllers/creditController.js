const asyncHandler = require('express-async-handler')
const Credit = require('../models/transactionModel')


// @desc    Get user credit transactions
// @route   GET /api/credit
// @access  Private
const getCredits = asyncHandler(async (req, res) => {
    const credits = await Credit.find({ userId: req.user.id , type: "credit"})
    res.status(200).json (credits)
  })


  // @desc    Create new credit
// @route   POST /api/credit
// @access  Private
const createCredit = asyncHandler(async (req, res) => {
    const { name, type, category, date, amount } = req.body
  
    if (!name || !type || !date || !amount || !category) {
      res.status(400)
      throw new Error('Please fill all the fields!')
    }
  
    const credit = await Credit.create({
      name,
      type,
      category,
      date,
      amount,
      userId: req.user.id,
    })
  
    res.status(201).json(credit)
  })
  
  // @desc    Delete credit
  // @route   DELETE /api/credit/:id
  // @access  Private
  const deleteCredit = asyncHandler(async (req, res) => {
    const credit = await Credit.findById(req.params.id)
    

    if (!credit) {
      res.status(404)
      throw new Error('Credit not found')
    }

    if (credit.userId.toString() !== req.user.id) {
      res.status(401)
      throw new Error('Not Authorized')
    }
  
    await credit.remove()
  
    res.status(200).json({ success: true })
  })


  
// @desc    Update credit
// @route   PUT /api/credit/:id
// @access  Private
const updateCredit = asyncHandler(async (req, res) => {
    const credit = await Credit.findById(req.params.id)
  
    if (!credit) {
      res.status(404)
      throw new Error('Credit not found')
    }
  
    if (credit.userId.toString() !== req.user.id) {
      res.status(401)
      throw new Error('Not Authorized')
    }
  
    const updatedCredit = await Credit.findByIdAndUpdate(
      req.params.id,
      req.body,
      
    )
  
    res.status(200).json(updatedCredit)
  })


  module.exports = {
    getCredits,
    createCredit,
    deleteCredit,
    updateCredit
  }