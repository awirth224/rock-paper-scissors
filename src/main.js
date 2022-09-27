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
var allIcons = document.querySelectorAll('.icon')
var classicIcons = document.querySelectorAll('.classic-icon')
var difficultIcons = document.querySelectorAll('.difficult-icon')
var classicButton = document.querySelector('.play-classic')
var difficultButton = document.querySelector('.play-difficult')
var gameArea = document.querySelector('.game-area')

//eventListeners

classicButton.addEventListener('click', classicGameDisplay)
difficultButton.addEventListener('click', difficultGameDisplay)

for (var i = 0; i < classicIcons.length; i++) {
  classicIcons[i].addEventListener('click', playGame)
}

for (var i = 0; i < allIcons.length; i++) {
  allIcons[i].addEventListener('click', playGame)
}

// rock.addEventListener('click', rocks)
// paper.addEventListener('click', papers, playGame)
// scissors.addEventListener('click',scissor, playGame)
// alien.addEventListener('click', aliens, playGame)
// lizard.addEventListener('click', lizards, playGame)

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

// function classicGame(event) {
//   addEventToIcons(classicIcons)
//   currentGame.takeTurnClassic(event.target.id)
// }

// function difficultGame(event) {
//   addEventToIcons(allIcons)
//   currentGame.takeTurnDifficult(event.target.id)
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

function selectFighter(event) {
  if (currentGame.gameType === 'classic') {
    currentGame.takeTurnCat(event.target.id)
    currentGame.takeTurnDog()
  }
  else if (currentGame.gameType === 'difficult') {
    currentGame.takeTurnCat(event.target.id)
    currentGame.takeTurnDogDifficult()
  }
}

function displayCatChoice(event) {
  selectFighter(event)
  rock.classList.add('hidden')
  paper.classList.add('hidden')
  scissors.classList.add('hidden')

  if(currentGame.cat.choice === 'rock') {
    rock.classList.remove('hidden')
  }
  else if(currentGame.cat.choice === 'paper') {
    paper.classList.remove('hidden')
  }
  else if(currentGame.cat.choice === 'scissors') {
    scissors.classList.remove('hidden')
  }
  else if(currentGame.cat.choice === 'alien') {
    alien.classList.remove('hidden')
  }
  else if(currentGame.cat.choice === 'lizard') {
    lizard.classList.remove('hidden')
  }
}

function displayDogChoice(event) {
  selectFighter(event)
  rock.classList.add('hidden')
  paper.classList.add('hidden')
  scissors.classList.add('hidden')

  if(currentGame.dog.choice === 'rock') {
    rock.classList.remove('hidden')
  }
  else if(currentGame.dog.choice === 'paper') {
    paper.classList.remove('hidden')
  }
  else if(currentGame.dog.choice === 'scissors') {
    scissors.classList.remove('hidden')
  }
  else if(currentGame.dog.choice === 'alien') {
    alien.classList.remove('hidden')
  }
  else if(currentGame.dog.choice === 'lizard') {
    lizard.classList.remove('hidden')
  }
}

function playGame(event) {
  displayCatChoice(event)
  displayDogChoice(event)
  updateWinDisplay()
  displayChangeGameButton()
}

function displayChangeGameButton() {
  if(currentGame.dog.wins > 0 || currentGame.cat.wins > 0) {
    changeGameButton.classList.remove('hidden')
  }
}

function updateWinDisplay() {
  currentGame.checkWins()
  catWins.innerText = ''
  dogWins.innerText = ''
  catWins.innerHTML += `Wins: ${currentGame.cat.wins}`
  dogWins.innerHTML += `Wins: ${currentGame.dog.wins}`
}


