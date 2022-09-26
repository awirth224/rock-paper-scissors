//querySelectors
var winDisplay = document.querySelector('.wins')
var changingTitle = document.querySelector('.change-game-display')
var gameArea = document.querySelector('.game-area')
var chooseFighter = document.querySelector('.choose-fighter')
var playersChoices = document.querySelector('.display-game')
var classicGame = document.querySelector('.classic')
var difficultGame = document.querySelector('.difficult')
var lizardAlien = document.querySelector('.icon')

//eventListeners
//one on game choice- classic or difficult
classicGame.addEventListener('click', classicGame)
difficultGame.addEventListener('click', difficultGame)



//functions
function classicGame() {
  gameArea.classList.add('hidden')
  chooseFighter.classList.remove('hidden')
}


function difficultGame() {
  classicGame()
  lizardAlien.classList.remove('hidden')

}


function updateWinDisplay() {

}

