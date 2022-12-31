import axios from 'axios'

const API_URL = '/api/debit/'

// Create new debit
const createDebit = async (debitData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, debitData, config)

  return response.data
}

// Get user debits
const getDebits = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// delete user debit
const deleteDebit = async (debitId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + debitId, config)

  return response.data
}

// update debit
const updateDebit = async (debitId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(
    API_URL + debitId, config
  )

  return response.data
}

const debitService = {
  createDebit,
  getDebits,
  updateDebit,
  deleteDebit
}

export default debitService