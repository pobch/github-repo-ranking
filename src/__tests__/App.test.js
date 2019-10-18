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

// Note: We test full page load and infinite scrolling in the separate e2e test
test('cards display content correctly', async () => {
  mockAxios.get.mockResolvedValue(FIRST_PAGE.RESPONSE)
  const { getAllByTestId, getByText, getAllByText } = render(<App />)
  await waitForElement(() => getAllByTestId('repo-card'))
  // repo name
  expect(getByText(/mock-name-1/i)).toBeInTheDocument()
  // description
  expect(getByText(/mock description 1/i)).toBeInTheDocument()
  // stars
  expect(getByText(/1001/i)).toBeInTheDocument()
  // forks
  expect(getByText(/1111/i)).toBeInTheDocument()
  // language
  expect(getByText(/lang 1/i)).toBeInTheDocument()
  // link
  expect(getAllByText(/github link/i)[0]).toHaveAttribute('href', 'mock-url-1')
})
