const {results} = require('../public/data.js')

const randomQuestions = async (req, res) => {
  const array = []
  const getRandomNumber = () => {
    const number = Math.floor(Math.random()*results.length)
    return number
  }
  while (array.length !== 10) {
    const newNumber = getRandomNumber()
    if (!array.includes(newNumber)) {
      array.push(newNumber)
    }
  }
  const questions = array.map(num => results[num])
  try {
    res.json(questions)
  }
  catch {
    res.status(400).json({message:"Error"})
  }
  
}

const checkAnswers = async (req, res) => {
  
}

module.exports = { randomQuestions, checkAnswers }