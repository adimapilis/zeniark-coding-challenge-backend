const express = require('express')
const router = express.Router()
const { randomQuestions, checkAnswers } = require('../controllers/questionController')

router.route('/questions')
  // route for getting the questions
  .get(randomQuestions)

router.route('/submit')
  // route for checking the response
  .post(checkAnswers)

module.exports = router