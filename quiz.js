const question = document.querySelector('#question')
const options = Array.from(document.querySelectorAll('.option-text'))
const scoreText = document.querySelector('#score')


let currentQuest = {}
let acceptAnswer = true
let score = 0
let questCount = 0
let availQuest = []


let questions = [
        {
        question: "Which is NOT a fruit?",
        choice1: 'Apple',
        choice2: 'Orange',
        choice3: 'Potato',
        choice4: 'Pineapple',
        answer: 3,
        },
    
        {
        question: "Which country is in South America?",
        choice1: "USA",
        choice2: "Chile",
        choice3: "Mexico",
        choice4: "China",
        answer: 2,
        },
    
        
        {
        question: "What color is the sky?",
        choice1: "Magenta",
        choice2: "Purple",
        choice3: "Red",
        choice4: "Blue",
        answer: 4,
        },
    
        {
        question: "How many months have 28 days?",
        choice1: " 1(Duhh)",
        choice2: "3",
        choice3: "6",
        choice4: "12",
        answer: 4,
        }
    
]


const addPoint = 1
const maxQuest = 4



startQuiz = () => {
    questCount = 0
    score = 0
    availQuest = [...questions]
    getNextQuest()
}


getNextQuest = () => {
    if(availQuest.length === 0 || questCount > maxQuest) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('end.html')
    }

    questCount++

    const questIndex = Math.floor(Math.random() * availQuest.length)
    currentQuest = availQuest[questIndex]
    question.innerText = currentQuest.question

    options.forEach(option => {
        const number = option.dataset['number']
        option.innerText = currentQuest['option' + number]
    })

    availQuest.splice(questIndex,  1)

    acceptAnswer = true
}


options.forEach (option => {
    option.addEventListener('click', e => {
        if(!acceptAnswer) return

        acceptAnswer = false
        const selectedOption = e.target
        const selectedAns = selectedOption.dataset['number']

        let classToApply = selectedAns == currentQuest.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incScore(addPoint)
        }

        selectedOption.parentElement.classList.add(classToApply)

    //     // setPause(() => {
    //     //     selectedOption.parentElement.classList.remove(classToApply)
            getNextQuest()

        }, 1000)
    // // })

})

incScore = num => {
    score +=num
    scoreText.innerText = score
}

startQuiz()


