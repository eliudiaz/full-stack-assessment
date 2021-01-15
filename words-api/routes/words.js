const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
  const text = req.query.text

  if (text && text.length > 0 && onlyLetters(text)) {
    const palindrome = isPalindrome(text)
    return res.send({ text: text, palindrome: palindrome })
  } else {
    return res.status(400).json({ error: 'Invalid text' })
  }
})

function isPalindrome (testStr) {
  const reversed = testStr.split('').reverse().join('')
  return reversed === testStr
}

function onlyLetters (str) {
  return str.match('^[A-Za-z]+$')
}

module.exports = router
