console.log('loaded')
const sleepStat = document.querySelector('#sleep')
const boredomStat = document.querySelector('#boredom')
const hungerStat = document.querySelector('#hunger')
const startBtn = document.querySelector('.start-game')
const resetBtn = document.querySelector('.reset-game')

const napBtn = document.querySelector('.nap')
const playBtn = document.querySelector('.play')
const feedBtn = document.querySelector('.feed')

resetBtn.disabled = true;
let age = 0 
let interval

function updateStats(){
    age++
    sleepStat.textContent =  Number(sleepStat.textContent)+1
    boredomStat.textContent = Number(boredomStat.textContent)+1
    hungerStat.textContent = Number(hungerStat.textContent)+1
    if (boredomStat.textContent== 10 || sleepStat.textContent== 10 || hungerStat.textContent== 10 ){
        alert('gameOver')
        resetGame()
    }

    if(age == 10){
        alert('You Win!')
        resetGame()
    }
}
function startGame(){
    interval = setInterval(updateStats, 3000)
    startBtn.disabled = true;
    resetBtn.disabled = false;
    napBtn.addEventListener('click', decrementStat) 
    playBtn.addEventListener('click', decrementStat) 
    feedBtn.addEventListener('click', decrementStat) 
}
function resetGame(){
    age = 0
    clearInterval(interval)
    sleepStat.textContent = 0
    boredomStat.textContent = 0
    hungerStat.textContent = 0
    startBtn.disabled = false
    feedBtn.removeEventListener('click', decrementStat) 
    feedBtn.removeEventListener('click', decrementStat) 
    feedBtn.removeEventListener('click', decrementStat) 
}

function decrementStat(e){
    if (e.target.innerText == 'Nap'){
        sleepStat.textContent = sleepStat.textContent -1 > -1 ? Number(sleepStat.textContent)-1 : 0;
    }
    else if (e.target.innerText == 'Play'){
        boredomStat.textContent = boredomStat.textContent -1 > -1 ? Number(boredomStat.textContent)-1 : 0;
    }
    else if (e.target.innerText == 'Feed'){
        hungerStat.textContent = hungerStat.textContent -1 > -1 ? Number(hungerStat.textContent)-1 : 0; 
    }
}

startBtn.addEventListener('click', startGame)
resetBtn.addEventListener('click', resetGame)