const quotes = require('../assets/quotes.json')

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

module.exports = (count) => {
  if (!count || count < 0) {
    count = 1
  }

  const array = []
  for (let i = 0; i < count; i++) {
    array.push(quotes[randomNumber(0, quotes.length)])
  }

  return array
}
