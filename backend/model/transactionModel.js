const mongoose = require('mongoose')

const transactionSchema = mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: [true, "Please add the trasanction name!"]
    },
    type: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: [true, "Please add the transaction category!"]
    },
    amount: {
        type: Number,
        required: [true, "Please add the transaction amount!"]
    },
    date: {
        type: Date,
        required: [true, "Please add the transaction date!"]
    }
})


module.exports = mongoose.model('Transaction', transactionSchema)