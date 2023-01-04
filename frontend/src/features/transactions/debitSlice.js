import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import debitService from './debitService'
import { extractErrorMessage } from '../../utils'

const initialState = {
    debit: null,
    debits: null,
}

// Create new debit
export const createDebit = createAsyncThunk(
  'debits/create',
  async (debitData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await debitService.createDebit(debitData, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
  }
)

// Get user debits
export const getDebits = createAsyncThunk(
  'debits/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await debitService.getDebits(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
  }
)


// delete debit
export const deleteDebit = createAsyncThunk(
  'debits/delete',
  async (debitId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await debitService.deleteDebit(debitId, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
  }
)


// update debit
export const updateDebit = createAsyncThunk(
    'debits/update',
    async (debitId, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await debitService.updateDebit(debitId, token)
      } catch (error) {
        return thunkAPI.rejectWithValue(extractErrorMessage(error))
      }
    }
  )

export const debitSlice = createSlice({
  name: 'debit',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getDebits.pending, (state) => {
        state.debits = null
      })
      .addCase(getDebits.fulfilled, (state, action) => {
        state.debits = action.payload
      })
      .addCase(deleteDebit.fulfilled, (state, action) => {
        state.debit = action.payload
        state.debits = state.debits.map((debit) =>
          debit._id === action.payload._id ? action.payload : debit
        )
      })
  },
})

export default debitSlice.reducer