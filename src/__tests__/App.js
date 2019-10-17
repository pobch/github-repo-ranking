import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import mockAxios from 'axios'
import App from '../App'
import { FIRST_PAGE } from '../mockResponse/axiosResponse'

jest.mock('axios', () => {
  return {
    get: jest.fn()
  }
})

test('cards display content correctly', async () => {
  mockAxios.get.mockResolvedValue(FIRST_PAGE.RESPONSE)
  const { getByTestId } = render(<App />)
  await waitForElement(() => getByTestId('repo-card'))
})
