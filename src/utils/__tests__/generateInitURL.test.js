import { generateInitURL } from '../generateInitURL'

test('generate URL with correct date infomation', () => {
  let resultURL

  // 9th month has 30 days
  resultURL = generateInitURL(new Date('2019-10-03T10:22:13.618Z'))
  expect(resultURL).toEqual(
    'https://api.github.com/search/repositories?q=created:>2019-09-03T10:22:13Z&sort=stars&order=desc&per_page=10'
  )

  // 10th month has 31 days
  resultURL = generateInitURL(new Date('2019-11-17T22:10:15.018Z'))
  expect(resultURL).toEqual(
    'https://api.github.com/search/repositories?q=created:>2019-10-18T22:10:15Z&sort=stars&order=desc&per_page=10'
  )

  // even though the begin date is +7 timezone, the result date has to be +0 timezone
  resultURL = generateInitURL(new Date('2019-10-03T10:22:13.618+07:00'))
  expect(resultURL).toEqual(
    'https://api.github.com/search/repositories?q=created:>2019-09-03T03:22:13Z&sort=stars&order=desc&per_page=10'
  )
})
