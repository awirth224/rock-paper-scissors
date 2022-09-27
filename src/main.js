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

function setupArena() {
  rock.classList.add('hidden')
  paper.classList.add('hidden')
  scissors.classList.add('hidden')
  dogChoiceDisplay.classList.remove('hidden')
  catChoiceDisplay.classList.remove('hidden')
}

function displayBoth(event) {
  setupArena()
  selectFighter(event)

  if(currentGame.cat.choice === 'rock' && currentGame.dog.choice === 'rock') {
    rock.classList.remove('hidden')
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-rocks.png" alt="happy-rocks">`
    changingTitle.innerText = 'It\'s a draw!'
  }
  else if(currentGame.cat.choice === 'rock' && currentGame.dog.choice === 'paper') {
    rock.classList.remove('hidden')
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-paper.png" alt="happy-paper">`
    changingTitle.innerText = 'Dog Wins!'
  }
  else if(currentGame.cat.choice === 'rock' && currentGame.dog.choice === 'scissors') {
    rock.classList.remove('hidden')
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-scissors.png" alt="happy-scissors">`
    changingTitle.innerText = 'Cat Wins!'
  } 
  else if(currentGame.cat.choice === 'rock' && currentGame.dog.choice === 'alien') {
    rock.classList.remove('hidden')
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-alien.png" alt="happy-alien">`
    changingTitle.innerText = 'Dog Wins!' 
  }
  else if(currentGame.cat.choice === 'rock' && currentGame.dog.choice === 'lizard') {
    rock.classList.remove('hidden')
    dogChoiceDisplay.innerHTML = `<img src="./assets/lizard.png" alt="lizard">`
    changingTitle.innerText = 'Cat Wins!' 
  }

  else if(currentGame.cat.choice === 'paper' && currentGame.dog.choice === 'rock') {
    paper.classList.remove('hidden')
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-rocks.png" alt="happy-rocks">`
    changingTitle.innerText = 'Cat Wins!'
  }
  else if(currentGame.cat.choice === 'paper' && currentGame.dog.choice === 'paper') {
    paper.classList.remove('hidden')
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-paper.png" alt="happy-paper">`
    changingTitle.innerText = 'It\'s a Draw!'
  }
  else if(currentGame.cat.choice === 'paper' && currentGame.dog.choice === 'scissors') {
    paper.classList.remove('hidden')
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-scissors.png" alt="happy-scissors">`
    changingTitle.innerText = 'Dog Wins!'
  }
  else if(currentGame.cat.choice === 'paper' && currentGame.dog.choice === 'alien') {
    paper.classList.remove('hidden')
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-alien.png" alt="happy-alien">`
    changingTitle.innerText = 'Cat Wins!'
  }
  else if(currentGame.cat.choice === 'paper' && currentGame.dog.choice === 'lizard') {
    paper.classList.remove('hidden')
    dogChoiceDisplay.innerHTML = `<img src="./assets/lizard.png" alt="lizard">`
    changingTitle.innerText = 'Dog Wins!'
  }
  

  else if(currentGame.cat.choice === 'scissors' && currentGame.dog.choice === 'rock') {
    scissors.classList.remove('hidden')
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-rocks.png" alt="happy-rocks">`
    changingTitle.innerText = 'Cat Wins!'
  }
  else if(currentGame.cat.choice === 'scissors' && currentGame.dog.choice === 'paper') {
    scissors.classList.remove('hidden')
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-paper.png" alt="happy-paper">`
    changingTitle.innerText = 'Dog Wins!'
  }
  else if(currentGame.cat.choice === 'scissors' && currentGame.dog.choice === 'scissors') {
    scissors.classList.remove('hidden')
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-scissors.png" alt="happy-scissors">`
    changingTitle.innerText = 'It\'s a Draw!'
  }
  else if(currentGame.cat.choice === 'scissors' && currentGame.dog.choice === 'alien') {
    scissors.classList.remove('hidden')
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-alien.png" alt="happy-alien">`
    changingTitle.innerText = 'Cat Wins!'
  }
  else if(currentGame.cat.choice === 'scissors' && currentGame.dog.choice === 'lizard') {
    scissors.classList.remove('hidden')
    dogChoiceDisplay.innerHTML = `<img src="./assets/lizard.png" alt="lizard">`
    changingTitle.innerText = 'Dog Wins!'
  }

  else if(currentGame.cat.choice === 'alien' && currentGame.dog.choice === 'rock') {
    alien.classList.remove('hidden')
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-rocks.png" alt="happy-rocks">`
    changingTitle.innerText = 'Cat Wins!'
  }
  else if(currentGame.cat.choice === 'alien' && currentGame.dog.choice === 'paper') {
    alien.classList.remove('hidden')
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-paper.png" alt="happy-paper">`
    changingTitle.innerText = 'Dog Wins!'
  }
  else if(currentGame.cat.choice === 'alien' && currentGame.dog.choice === 'scissors') {
    alien.classList.remove('hidden')
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-scissors.png" alt="happy-scissors">`
    changingTitle.innerText = 'Dog Wins!'
  }
  else if(currentGame.cat.choice === 'alien' && currentGame.dog.choice === 'alien') {
    alien.classList.remove('hidden')
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-alien.png" alt="happy-alien">`
    changingTitle.innerText = 'It\'s a Draw!'
  }
  else if(currentGame.cat.choice === 'alien' && currentGame.dog.choice === 'lizard') {
    alien.classList.remove('hidden')
    dogChoiceDisplay.innerHTML = `<img src="./assets/lizard.png" alt="lizard">`
    changingTitle.innerText = 'Cat Wins!'
  }


  else if(currentGame.cat.choice === 'lizard' && currentGame.dog.choice === 'rock') {
    lizard.classList.remove('hidden')
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-rocks.png" alt="happy-rocks">`
    changingTitle.innerText = 'Dog Wins!'
  }
  else if(currentGame.cat.choice === 'lizard' && currentGame.dog.choice === 'paper') {
    lizard.classList.remove('hidden')
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-paper.png" alt="happy-paper">`
    changingTitle.innerText = 'Cat Wins!'
  }
  else if(currentGame.cat.choice === 'lizard' && currentGame.dog.choice === 'scissors') {
    lizard.classList.remove('hidden')
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-scissors.png" alt="happy-scissors">`
    changingTitle.innerText = 'Cat Wins!'
  }
  else if(currentGame.cat.choice === 'lizard' && currentGame.dog.choice === 'alien') {
    lizard.classList.remove('hidden')
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-alien.png" alt="happy-alien">`
    changingTitle.innerText = 'Dog Wins!'
  }
  else if(currentGame.cat.choice === 'lizard' && currentGame.dog.choice === 'lizard') {
    lizard.classList.remove('hidden')
    dogChoiceDisplay.innerHTML = `<img src="./assets/lizard.png" alt="lizard">`
    changingTitle.innerText = 'It\'s a Draw!'
  }
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

function reset() {
  setTimeout(displayBoth, 2000)
}

function playGame(event) {
  displayBoth(event)
  updateWinDisplay()
  displayChangeGameButton()
  reset()
}