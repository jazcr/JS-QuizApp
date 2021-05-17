const userInitials = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem.querySelector('mostRecentScore')


const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const maxScores = 5

finalScore.innerHTML = mostRecentScore

userInitials.addEventListener('keyup', () => {
    // saveScoreBtn.disabled = !username.value
})


saveHighScore = e => {
    e.preventDefault ()
    const score = {
        score: mostRecentScore,
        name: userInitials.vaule
    }

    highScores.push(score)
    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)
    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')


}