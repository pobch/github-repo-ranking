import { parseLinkHeader } from '../parseLinkHeader'

test('turns Link header in the response of requesting the first page into an object', () => {
  const linkHeader =
    '<https://api.mock.com/q?page=2>; rel="next", <https://api.mock.com/q?page=100>; rel="last"'
  const result = parseLinkHeader(linkHeader)
  expect(result).toEqual({
    next: 'https://api.mock.com/q?page=2',
    last: 'https://api.mock.com/q?page=100'
  })
})

test('turns Link header in the response of requesting other pages into an object', () => {
  const linkHeader =
    '<https://api.mock.com/q?page=1>; rel="prev", <https://api.mock.com/q?page=3>; rel="next", <https://api.mock.com/q?page=100>; rel="last", <https://api.mock.com/q?page=1>; rel="first"'
  const result = parseLinkHeader(linkHeader)
  expect(result).toEqual({
    prev: 'https://api.mock.com/q?page=1',
    next: 'https://api.mock.com/q?page=3',
    last: 'https://api.mock.com/q?page=100',
    first: 'https://api.mock.com/q?page=1'
  })
})

test('turns Link header in the response of requesting the last page into an object', () => {
  const linkHeader =
    '<https://api.mock.com/q?page=99>; rel="prev", <https://api.mock.com/q?page=1>; rel="first"'
  const result = parseLinkHeader(linkHeader)
  expect(result).toEqual({
    prev: 'https://api.mock.com/q?page=99',
    first: 'https://api.mock.com/q?page=1'
  })
})

test('wrong argument type throws Error', () => {
  expect(() => {
    parseLinkHeader({ link: 'some text' })
  }).toThrow()
  expect(() => {
    parseLinkHeader(['link', 'some text'])
  }).toThrow()
  expect(() => {
    parseLinkHeader(2477456)
  }).toThrow()
  expect(() => {
    parseLinkHeader('')
  }).toThrow()
  expect(() => {
    parseLinkHeader()
  }).toThrow()
})
