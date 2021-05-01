module.exports.required = (value, label) => {
  if ((/.+/).test(value)) {
    return true
  }
  return `${label} is required`
}
