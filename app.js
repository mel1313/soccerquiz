var  startPage;
var counter = 0;

var questions = [
  ['Jurgen Klopp is the manager of?', 'Liverpool', 'Real Madrid', 'Singapore'],
  ['How many Champions League Cup did Liverpool win?', '3', '4', '5'],
  ['Where is Liverpool FC Home ground?', 'Anfield', 'Tampines', 'Canada']
]

function loadQuestion () {
  var question = document.createElement('div')
  question.innerText = questions[counter][0]
  console.log(question)

  document.getElementById('questionContainer').appendChild(question)
}

function loadAnswers () {
  var answers = document.createElement('button') // convert answers to buttons
  answers.innerText = questions[1]    //show possible answers from array
  document.getElementById('questionContainer').appendChild(answers)
  console.log(questions[counter][1])
}

function startQuiz () {
  document.getElementById("welcomePage").style.display="none";
  var questionContainer = document.createElement('div')
  document.getElementById('myQuiz').appendChild(questionContainer)
  questionContainer.id = "questionContainer"
  var nextButton = document.createElement('button')

  document.getElementById('myQuiz').appendChild(nextButton)

loadQuestion ()
loadAnswers ()


function nextQuestion () {
  counter = counter+1
  console.log(questions[counter])
}
}
