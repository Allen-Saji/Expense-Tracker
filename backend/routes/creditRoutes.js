const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware') 
const {createCredit, getCredits, deleteCredit, updateCredit} = require('../controllers/creditController')

router
      .route('/')
      .get(protect, getCredits)
      .post(protect, createCredit)

router
      .route('/:id')
      .delete(protect,deleteCredit)
      .put(protect, updateCredit)



module.exports = router