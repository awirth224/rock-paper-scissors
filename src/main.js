//querySelectors
var catWins = document.querySelector('.cat-wins')
var dogWins = document.querySelector('.dog-wins')
var catChoiceDisplay = document.querySelector('.cat-choice')
var dogChoiceDisplay = document.querySelector('.dog-choice')
var changingTitle = document.querySelector('.change-game-display')
var changeGameButton = document.querySelector('.change-game-button')
var chooseFighter = document.querySelector('.choose-fighter')
var playersChoices = document.querySelector('.display-choices')
var classicGame = document.querySelector('.classic')
var difficultGame = document.querySelector('.difficult')

var lizard = document.getElementById('lizard')
var alien  = document.getElementById('alien')
var rock = document.getElementById('rock')
var paper = document.getElementById('paper')
var scissors = document.getElementById('scissors')
var classicButton = document.querySelector('.play-classic')
var difficultButton = document.querySelector('.play-difficult')
var gameArea = document.querySelector('.game-area')

//eventListeners

classicButton.addEventListener('click', classicGameDisplay)
difficultButton.addEventListener('click', difficultGameDisplay)

rock.addEventListener('click', rocks)
paper.addEventListener('click', papers, playGame)
scissors.addEventListener('click',scissor, playGame)
alien.addEventListener('click', aliens, playGame)
lizard.addEventListener('click', lizards, playGame)

//global variables
var currentGame = new Game()

//functions
// function addEventToIcons(icons) {
//   for (var i = 0; i < icons.length; i++) {
//     icons[i].addEventListener('click', function(event){
//       playGame(event.target.id);
//     })
//   }
// }

function classicGameDisplay() {
  gameArea.classList.add('hidden')
  chooseFighter.classList.remove('hidden')
  changingTitle.innerText = 'Choose Your Fighter'
  currentGame.gameType = 'classic'
}

function difficultGameDisplay() {
  lizard.classList.remove('hidden')
  alien.classList.remove('hidden')
  classicGameDisplay()
  currentGame.gameType = 'difficult'
}

// function classicGame(event) {
//   addEventToIcons(classicIcons)
//   currentGame.takeTurnClassic(event.target.id)
// }

// function difficultGame(event) {
//   addEventToIcons(allIcons)
//   currentGame.takeTurnDifficult(event.target.id)
// }

function rocks() {
  console.log(currentGame.takeTurnClassic('rock'))
  if (currentGame.gameType === 'classic') {
    currentGame.takeTurnClassic('rock')
    displayDogChoice()
  }
  else if (currentGame.gameType === 'difficult') {
    currentGame.takeTurnDifficult('rock')
    displayCatChoice()
  }
  
}

function papers() {
  takeTurnClassic('paper')
}

function scissor() {
  currentGame.cat.choice = 'scissors'
}

function aliens() {
  currentGame.cat.choice = 'alien'
}

function lizards() {
  currentGame.cat.choice = 'lizard'
}

function displayCatChoice() {
    if(currentGame.cat.choice = 'rock') {
    catChoiceDisplay.innerHTML = `<img src="./assets/happy-rocks.png" alt="happy-rocks">`
  }
  else if(currentGame.cat.choice = 'paper') {
    catChoiceDisplay.innerHTML = `<img src="./assets/happy-paper.png" alt="happy-paper">`
  }
  else if(currentGame.cat.choice = 'scissors') {
    catChoiceDisplay.innerHTML = `<img src="./assets/happy-scissors.png" alt="happy-scissors">`
  }
  else if(currentGame.cat.choice = 'alien') {
    catChoiceDisplay.innerHTML = `<img src="./assets/happy-alien.png" alt="happy-alien">`
  }
  else if(currentGame.cat.choice = 'lizard') {
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

function playGame() {
  displayCatChoice()
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


