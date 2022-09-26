//querySelectors
var catWins = document.querySelector('.cat-wins')
var dogWins = document.querySelector('.dog-wins')
var catChoiceDisplay = document.querySelector('.cat-choice')
var dogChoiceDisplay = document.querySelector('.dog-choice')
var changingTitle = document.querySelector('.change-game-display')
var changeGameButton = document.querySelector('.change-game-button')
//var clickGame = document.querySelector('.game-type')
var gameArea = document.querySelector('.game-area')
var chooseFighter = document.querySelector('.choose-fighter')
var playersChoices = document.querySelector('.display-choices')
var classicGame = document.querySelector('.classic')
var difficultGame = document.querySelector('.difficult')
var lizardAlien = document.querySelector('.difficult-icon')
var classicIcons = document.querySelectorAll('.classic-icon')
var allIcons = document.querySelectorAll('.icon')
var classicButton = document.querySelector('.play-classic')
var difficultButton = document.querySelector('.play-difficult')


//eventListeners
classicButton.addEventListener('click', classicGameDisplay)
difficultButton.addEventListener('click', difficultGameDisplay)

//global variables
var currentGame = new Game()

//functions
function classicGameDisplay() {
  gameArea.classList.add('hidden')
  difficultGame.classList.add('hidden')
  chooseFighter.classList.remove('hidden')
  changeGameButton.classList.remove('hidden')
  changingTitle.innerText = 'Choose Your Fighter'
}

function difficultGameDisplay() {
  classicGame()
  lizardAlien.classList.remove('hidden')
  changeGameButton.classList.remove('hidden')
  changingTitle.innerText = 'Choose Your Fighter'

}

function addEventToIcons(icons) {
  for (var i = 0; i < icons.length; i++) {
    icons[i].addEventListener('click', difficultGame)
  }
}


function classicGame(event) {
  addEventToIcons(classicIcons)
  currentGame.takeTurnClassic(event.target.id)
  //is this needed --> classicGameDisplay()
}

function difficultGame(event) {
  addEventToIcons(allIcons)
  currentGame.takeTurnDifficult(event.target.choice)
  //is this needed -->  difficultGameDisplay()
}

function displayCatChoice(event) {
  if (event.target.id === 'rock') {
    currentGame.cat.choice = 'rock'
    catChoiceDisplay.innerHTML = `<img src="./assets/happy-rocks.png" alt="happy-rocks">`
  }
  else if(event.target.id === 'paper') {
    currentGame.cat.choice = 'paper'
    catChoiceDisplay.innerHTML = `<img src="./assets/happy-paper.png" alt="happy-paper">`
  }
  else if(event.target.id === 'scissors') {
    currentGame.cat.choice = 'scissors'
    catChoiceDisplay.innerHTML = `<img src="./assets/happy-scissors.png" alt="happy-scissors">`
  }
  else if(event.target.id === 'alien') {
    currentGame.cat.choice = 'alien'
    catChoiceDisplay.innerHTML = `<img src="./assets/happy-alien.png" alt="happy-alien">`
  }
  else if(event.target.id === 'lizard') {
    currentGame.cat.choice = 'lizard'
    catChoiceDisplay.innerHTML = `<img src="./assets/lizard.png" alt="lizard">`
  } 
}

function displayDogChoice() {
  if(currentGame.dog.choice === [0]) {
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-rocks.png" alt="happy-rocks">`
  }
  else if(currentGame.dog.choice === [1]) {
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-paper.png" alt="happy-paper">`
  }
  else if(currentGame.dog.choice === [2]) {
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-scissors.png" alt="happy-scissors">`
  }
  else if(currentGame.dog.choice === [3]) {
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-alien.png" alt="happy-alien">`
  }
  else if(currentGame.dog.choice === [4]) {
    dogChoiceDisplay.innerHTML = `<img src="./assets/lizard.png" alt="lizard">`
  }
}


function playGame(event) {
  displayCatChoice(event)
  displayDogChoice()
  currentGame.checkWins()
  updateWinDisplay()
  displayChangeGameButton()
}

function displayChangeGameButton() {
  if(currentGame.dog.wins > 0 || currentGame.cat.wins > 0) {
    changeGameButton.classList.remove('hidden')
  }
}

function updateWinDisplay() {
  catWins.innerHTML += `Wins: ${this.cat.wins}`
  dogWins.innerHTML += `Wins: ${this.dog.wins}`
}



