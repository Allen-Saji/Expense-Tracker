import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import creditService from './creditService'
import { extractErrorMessage } from '../../utils'

const initialState = {
    credits: null,
    credit: null,
}

// Create new credit
export const createCredit = createAsyncThunk(
  'credits/create',
  async (creditData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await creditService.createCredit(creditData, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
  }
)

// Get user credits
export const getCredits = createAsyncThunk(
  'credits/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await creditService.getCredits(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
  }
)


// delete credit
export const deleteCredit = createAsyncThunk(
  'credits/delete',
  async (creditId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await creditService.deleteCredit(creditId, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
  }
)

// update credit
export const updateCredit = createAsyncThunk(
    'credits/update',
    async (creditId, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await creditService.updateCredit(creditId, token)
      } catch (error) {
        return thunkAPI.rejectWithValue(extractErrorMessage(error))
      }
    }
  )

export const creditSlice = createSlice({
  name: 'credit',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCredits.pending, (state) => {
        state.credit = null
      })
      .addCase(getCredits.fulfilled, (state, action) => {
        state.credits = action.payload
      })
      .addCase(deleteCredit.fulfilled, (state, action) => {
        state.credit = action.payload
        state.credits = state.credits.map((credit) =>
          credit._id === action.payload._id ? action.payload : credit
        )
      })
  },
})

export default creditSlice.reducer