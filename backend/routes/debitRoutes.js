const express = require('express')
const router = express.Router()

router
      .route('/')
      .get((req,res) => {res.status(200).send("message: this is get debit route")})
      .post((req,res) => {res.status(200).send("message: this is post debit route")})

router
      .route('/:id')
      .delete((req,res) => {res.status(200).send("message: this is delete debit route")})
      .put((req,res) => {res.status(200).send("message: this is update debit route")})



module.exports = router