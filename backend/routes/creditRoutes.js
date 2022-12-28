const express = require('express')
const router = express.Router()

router
      .route('/')
      .get((req,res) => {res.status(200).send("message: this is get credit route")})
      .post((req,res) => {res.status(200).send("message: this is post credit route")})

router
      .route('/:id')
      .delete((req,res) => {res.status(200).send("message: this is delete credit route")})
      .put((req,res) => {res.status(200).send("message: this is update credit route")})



module.exports = router