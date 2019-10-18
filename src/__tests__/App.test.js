import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, waitForElement, wait } from '@testing-library/react'
import mockAxios from 'axios'
import App from '../App'
import { FIRST_PAGE, LAST_PAGE } from '../mockResponse/axiosResponse'

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

test('display error message when there is an api error', async () => {
  mockAxios.get.mockRejectedValue(new Error())
  const { getByText } = render(<App />)
  await wait(() => expect(getByText(/please refresh the page/i)).toBeInTheDocument())
})

test('display ending message at the bottom of the last page', async () => {
  mockAxios.get.mockResolvedValue(LAST_PAGE.RESPONSE)
  const { getByText } = render(<App />)
  await wait(() => expect(getByText(/-- end --/i)).toBeInTheDocument())
})
