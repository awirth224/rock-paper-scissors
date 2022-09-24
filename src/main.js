//querySelectors
var catWins = document.querySelector('.cat-wins')
var dogWins = document.querySelector('.dog-wins')
var changingTitle = document.querySelector('.change-game-display')
var gameArea = document.querySelector('.game-area')
var chooseFighter = document.querySelector('.choose-fighter')
var playersChoices = document.querySelector('.display-game')
var classicGame = document.querySelector('.classic')
var difficultGame = document.querySelector('.difficult')
var lizardAlien = document.querySelector('.icon')
var classicIcons = document.querySelectorAll('.classic-icon')

//eventListeners
//one on game choice- classic or difficult
classicGame.addEventListener('click', classicGame)
difficultGame.addEventListener('click', difficultGame)

//global variables
currentGame = new Game ()

//functions
function classicGame() {
  gameArea.classList.add('hidden')
  toggle(chooseFighter)
  classicIcons.classList.remove('hidden')
  changingTitle.innerText += 'Choose Your Fighter'
}



function difficultGame() {
  classicGame()
  lizardAlien.classList.remove('hidden')
  changingTitle.innerText += 'Choose Your Fighter'

}


function updateWinDisplay() {
  catWins.innerHTML += `Wins: ${this.cat.wins}`
  dogWins.innerHTML += `Wins: ${this.dog.wins}`
}

