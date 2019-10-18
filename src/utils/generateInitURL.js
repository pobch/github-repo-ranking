function calculatePrevious30Days(beginDate) {
  // find previous 30-day date
  beginDate.setDate(beginDate.getDate() - 30)
  // make ISOString format and remove decimal points for calling GitHub's API
  return beginDate.toISOString().replace(/\.\d+/, '')
}

export function generateInitURL(beginDate) {
  return `https://api.github.com/search/repositories?q=created:>${calculatePrevious30Days(
    beginDate
  )}&sort=stars&order=desc&per_page=10`
}
