const {deleteDebit, updateDebit, getDebits, createDebit} = require('../controllers/debitController') 
const {protect} = require('../middleware/authMiddleware')
const express = require('express')
const router = express.Router()

router
      .route('/')
      .get(protect, getDebits)
      .post(protect, createDebit)

router
      .route('/:id')
      .delete(protect, deleteDebit)
      .put(protect, updateDebit)



module.exports = router