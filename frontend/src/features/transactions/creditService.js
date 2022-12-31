import axios from 'axios'

const API_URL = '/api/credit/'

// Create new credit
const createCredit = async (creditData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, creditData, config)

  return response.data
}

// Get user credits
const getCredits = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// delete user credit
const deleteCredit = async (creditId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + creditId, config)

  return response.data
}

// update credit
const updateCredit = async (creditId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(
    API_URL + creditId, config
  )

  return response.data
}

const creditService = {
  createCredit,
  getCredits,
  updateCredit,
  deleteCredit
}

export default creditService