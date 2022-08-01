let startButton = document.getElementById('start-btn')
let nextButton = document.getElementById('next-btn')
let questionContainerElement = document.getElementById('question-container')
let questionElement = document.getElementById('question')
let answerButtonsElement = document.getElementById('answer-buttons')
let counterElement = document.getElementById('counter')
let scoreTracker = document.getElementById('score-tracker')
let scoreUpElement = document.getElementById('score-up');
let questionCounter;



let shuffledQuestions, currentQuestionIndex


startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion();

})

function startGame() {
    questionCounter = 0;
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random(- .5));
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    scoreTracker.classList.remove('hide');
    setNextQuestion();
    scoreUpElement.textContent = 0;
    counter.textContent = 0;
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}

function showQuestion(question){
    questionCounter++;
    counterElement.innerHTML = questionCounter;
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        let button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn');
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
};

function selectAnswer(e) {
    let selectedButton = e.target
    let correct = selectedButton.dataset.correct

    processResults(correct);
    setStatusClass(document.body, correct)

    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
        
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    } 
    else {
        startButton.innerText = "Restart";
        startButton.classList.remove('hide');
    };

};

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct');
    }
    else {
        element.classList.add('wrong');
    }

};
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');

};

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
        question: 'Who won the 2021/22 Champion League Final?',
        answers: [
            { text: 'Barcelona', correct: false },
            { text: 'Manchester City', correct: false },
            { text: 'Liverpool', correct: false },
            { text: 'Real Madrid', correct: true }
        ]

    },

    {
        question: 'Who missed the penalty for England in the Euro 96 Semi Finals against Germany?',
        answers: [
            { text: 'Paul Gascoine', correct: false },
            { text: 'Alan Shearer', correct: false },
            { text: 'Gareth Southgate', correct: true },
            { text: 'David Beckham', correct: false }
        ]

    }, 

    {
        question: 'How many times has Ronaldo Ballon d or?',
        answers: [
            { text: '4', correct: false },
            { text: '3', correct: false },
            { text: '5', correct: true },
            { text: '1', correct: false }
        ]

    }, 

];

function processResults (isCorrect) {
    if (!isCorrect) {
        return;
    }

    let scoreUp = parseInt(scoreUpElement.textContent, 10) || 0;

    scoreUpElement.textContent = scoreUp + 1;

    let counter = parseInt(counterElement.textContent, 10);
    counterElement.innerHTML = questionCounter;
}

 

