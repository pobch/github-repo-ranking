export function parseLinkHeader(linkValue) {
  if (typeof linkValue !== 'string' || linkValue === '') {
    throw new Error("There is no 'Link' in the response's headers")
  }

  let result = {}
  linkValue
    .split(',')
    .map(data => data.trim())
    .forEach(data => {
      const key = data.match(/rel=['"](.+)['"]$/)[1]
      const value = data.match(/^<(.+)>/)[1]
      result[key] = value
    })

  // { next: 'https://url-for-next-page.com', last: 'https://url-for-last-page.com' }
  return result
}
