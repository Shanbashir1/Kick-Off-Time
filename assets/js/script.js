const startButton = document.getElementById("start-btn")
let nextButton = document.getElementById("next-btn")
let containerQuestionElement = document.getElementById('container-question')
let questionElement = document.getElementById('question')
let answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()

})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random())
    currentQuestionIndex = 0
    containerQuestionElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        let button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')

        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
        
    });

}
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    let selectedButton = e.target
    let correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
        
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
    }

}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong')
    }

}
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

}

let questions = [

    {
        question: 'Who Won the 1994 World Cup?',
        answers: [
            { text: 'Brazil', correct: true },
            { text: 'England', correct: false },
            { text: 'Italy', correct: false },
            { text: 'Germany', correct: false }
        ]

    },

    {
        question: 'Who is a better player?',
        answers: [
            { text: 'Ronaldo', correct: true },
            { text: 'Messi', correct: false },
            { text: 'Neymar', correct: false },
            { text: 'Mbpappe', correct: false }
        ]

    }
]