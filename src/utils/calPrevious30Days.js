export function calPrevious30Days() {
  // date now
  let d = new Date()

  // previous 30 days
  d.setDate(d.getDate() - 30)

  // make ISOString format and remove decimal points for calling GitHub's API
  return d.toISOString().replace(/\.\d+/, '')
}
