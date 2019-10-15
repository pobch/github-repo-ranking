function calculatePrevious30Days() {
  // date now
  let d = new Date()

  // previous 30 days
  d.setDate(d.getDate() - 30)

  // make ISOString format and remove decimal points for calling GitHub's API
  return d.toISOString().replace(/\.\d+/, '')
}

export function genInitApiCall() {
  return `https://api.github.com/search/repositories?q=created:>${calculatePrevious30Days()}&sort=stars&order=desc&per_page=10`
}
