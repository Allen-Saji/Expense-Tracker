import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import transactionService from './transactionService'
import { extractErrorMessage } from '../../utils'

const initialState = {
   transactions: null
}

// Get user transcations
export const getTransactions = createAsyncThunk(
    'transactions/getAll',
    async (_, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await transactionService.getTransactions(token)
      } catch (error) {
        return thunkAPI.rejectWithValue(extractErrorMessage(error))
      }
    }
  )


  
export const transactionSlice = createSlice({
    name: 'transactions',
    initialState,
    extraReducers: (builder) => {
      builder
        .addCase(getTransactions.pending, (state) => {
          state.transactions = null
        })
        .addCase(getTransactions.fulfilled, (state, action) => {
          state.transactions = action.payload
        })
    },
  })


  export default transactionSlice.reducer