import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import creditReducer from '../features/transactions/creditSlice'
import debitReducer from '../features/transactions/debitSlice'
import transactionReducer from '../features/transactions/transactionSlice'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    credit: creditReducer,
    debit: debitReducer,
    transaction: transactionReducer
  },
})