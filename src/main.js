//querySelectors
var classicButton = document.querySelector('.play-classic')
var difficultButton = document.querySelector('.play-difficult')
var changeGameButton = document.querySelector('.change-game-button')
// var classicGame = document.querySelector('.classic')
// var difficultGame = document.querySelector('.difficult')
var lizard = document.getElementById('lizard')
var alien  = document.getElementById('alien')
var rock = document.getElementById('rock')
var paper = document.getElementById('paper')
var scissors = document.getElementById('scissors')
var allIcons = document.querySelectorAll('.icon')
var classicIcons = document.querySelectorAll('.classic-icon')
// var difficultIcons = document.querySelectorAll('.difficult-icon')
var gameArea = document.querySelector('.game-area')
var chooseFighter = document.querySelector('.choose-fighter')
var changingTitle = document.querySelector('.choose-game-display')
var catWins = document.querySelector('.cat-wins')
var dogWins = document.querySelector('.dog-wins')
var catChoiceDisplay = document.querySelector('.cat-choice')
var dogChoiceDisplay = document.querySelector('.dog-choice')


//eventListeners
classicButton.addEventListener('click', classicGameDisplay)
difficultButton.addEventListener('click', difficultGameDisplay)
changeGameButton.addEventListener('click', displayMainPage)
chooseFighter.addEventListener('click',)

for (var i = 0; i < classicIcons.length; i++) {
  classicIcons[i].addEventListener('click', playGame)
}

for (var i = 0; i < allIcons.length; i++) {
  allIcons[i].addEventListener('click', playGame)
}

//global variables
var currentGame = new Game()

//functions
function displayMainPage() {
  gameArea.classList.remove('hidden')
  chooseFighter.classList.add('hidden')
  rock.classList.add('hidden')
  paper.classList.add('hidden')
  scissors.classList.add('hidden')
  alien.classList.add('hidden')
  lizard.classList.add('hidden')
  changingTitle.innerText = 'Choose Your Game'
}

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
  lizard.classList.add('hidden')
  alien.classList.add('hidden')
  dogChoiceDisplay.classList.remove('hidden')
  catChoiceDisplay.classList.remove('hidden')
}

function displayBoth(event) {
  setupArena()
  selectFighter(event)

  if(currentGame.cat.choice === 'rock' && currentGame.dog.choice === 'rock') {
    catChoiceDisplay.innerHTML = `<img src="./assets/happy-rocks.png" alt="happy-rocks" class="classic-icon icon" id="rock">`
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-rocks.png" alt="happy-rocks" class="classic-icon icon" id="rock">`
    changingTitle.innerText = 'It\'s a draw!'
  }
  else if(currentGame.cat.choice === 'rock' && currentGame.dog.choice === 'paper') {
    catChoiceDisplay.innerHTML = `<img src="./assets/happy-rocks.png" alt="happy-rocks class="classic-icon icon" id="rock"">`
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-paper.png" alt="happy-paper" class="classic-icon icon" id="paper">`
    changingTitle.innerText = 'Dog Wins!'
  }
  else if(currentGame.cat.choice === 'rock' && currentGame.dog.choice === 'scissors') {
    catChoiceDisplay.innerHTML = `<img src="./assets/happy-rocks.png" alt="happy-rocks" class="classic-icon icon" id="rock">`
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-scissors.png" alt="happy-scissors" class="classic-icon icon" id="scissors">`
    changingTitle.innerText = 'Cat Wins!'
  } 
  else if(currentGame.cat.choice === 'rock' && currentGame.dog.choice === 'alien') {
    catChoiceDisplay.innerHTML = `<img src="./assets/happy-rocks.png" alt="happy-rocks" class="classic-icon icon" id="rock">`
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-alien.png" alt="happy-alien" class="difficult-icon icon" id="alien">`
    changingTitle.innerText = 'Dog Wins!' 
  }
  else if(currentGame.cat.choice === 'rock' && currentGame.dog.choice === 'lizard') {
    catChoiceDisplay.innerHTML = `<img src="./assets/happy-rocks.png" alt="happy-rocks" class="classic-icon icon" id="rock">`
    dogChoiceDisplay.innerHTML = `<img src="./assets/lizard.png" alt="lizard" class="difficult-icon icon" id="lizard">`
    changingTitle.innerText = 'Cat Wins!' 
  }
  else if(currentGame.cat.choice === 'paper' && currentGame.dog.choice === 'rock') {
    catChoiceDisplay.innerHTML = `<img src="./assets/happy-paper.png" alt="happy-paper" class="classic-icon icon" id="paper">`
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-rocks.png" alt="happy-rocks" class="classic-icon icon" id="rock">`
    changingTitle.innerText = 'Cat Wins!'
  }
  else if(currentGame.cat.choice === 'paper' && currentGame.dog.choice === 'paper') {
    catChoiceDisplay.innerHTML = `<img src="./assets/happy-paper.png" alt="happy-paper" class="classic-icon icon" id="paper">`
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-paper.png" alt="happy-paper" class="classic-icon icon" id="paper">`
    changingTitle.innerText = 'It\'s a Draw!'
  }
  else if(currentGame.cat.choice === 'paper' && currentGame.dog.choice === 'scissors') {
    catChoiceDisplay.innerHTML = `<img src="./assets/happy-paper.png" alt="happy-paper" class="classic-icon icon" id="paper">`
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-scissors.png" alt="happy-scissors" class="classic-icon icon" id="scissors">`
    changingTitle.innerText = 'Dog Wins!'
  }
  else if(currentGame.cat.choice === 'paper' && currentGame.dog.choice === 'alien') {
    catChoiceDisplay.innerHTML = `<img src="./assets/happy-paper.png" alt="happy-paper" class="classic-icon icon" id="paper">`
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-alien.png" alt="happy-alien" class="difficult-icon icon" id="alien">`
    changingTitle.innerText = 'Cat Wins!'
  }
  else if(currentGame.cat.choice === 'paper' && currentGame.dog.choice === 'lizard') {
    catChoiceDisplay.innerHTML = `<img src="./assets/happy-paper.png" alt="happy-paper" class="classic-icon icon" id="paper">`
    dogChoiceDisplay.innerHTML = `<img src="./assets/lizard.png" alt="lizard" class="difficult-icon icon" id="lizard">`
    changingTitle.innerText = 'Dog Wins!'
  }
  else if(currentGame.cat.choice === 'scissors' && currentGame.dog.choice === 'rock') {
    catChoiceDisplay.innerHTML = `<img src="./assets/happy-scissors.png" alt="happy-scissors" class="classic-icon icon" id="scissors">`
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-rocks.png" alt="happy-rocks" class="classic-icon icon" id="rock">`
    changingTitle.innerText = 'Cat Wins!'
  }
  else if(currentGame.cat.choice === 'scissors' && currentGame.dog.choice === 'paper') {
    catChoiceDisplay.innerHTML = `<img src="./assets/happy-scissors.png" alt="happy-scissors" class="classic-icon icon" id="scissors">`
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-paper.png" alt="happy-paper" class="classic-icon icon" id="paper">`
    changingTitle.innerText = 'Dog Wins!'
  }
  else if(currentGame.cat.choice === 'scissors' && currentGame.dog.choice === 'scissors') {
    catChoiceDisplay.innerHTML = `<img src="./assets/happy-scissors.png" alt="happy-scissors" class="classic-icon icon" id="scissors">`
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-scissors.png" alt="happy-scissors" class="classic-icon icon" id="scissors">`
    changingTitle.innerText = 'It\'s a Draw!'
  }
  else if(currentGame.cat.choice === 'scissors' && currentGame.dog.choice === 'alien') {
    catChoiceDisplay.innerHTML = `<img src="./assets/happy-scissors.png" alt="happy-scissors" class="classic-icon icon" id="scissors">`
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-alien.png" alt="happy-alien" class="difficult-icon icon" id="alien">`
    changingTitle.innerText = 'Cat Wins!'
  }
  else if(currentGame.cat.choice === 'scissors' && currentGame.dog.choice === 'lizard') {
    catChoiceDisplay.innerHTML = `<img src="./assets/happy-scissors.png" alt="happy-scissors"class="classic-icon icon" id="scissors">`
    dogChoiceDisplay.innerHTML = `<img src="./assets/lizard.png" alt="lizard" class="difficult-icon icon" id="lizard">`
    changingTitle.innerText = 'Dog Wins!'
  }
  else if(currentGame.cat.choice === 'alien' && currentGame.dog.choice === 'rock') {
    catChoiceDisplay.innerHTML = `<img src="./assets/happy-alien.png" alt="happy-alien" class="difficult-icon icon" id="alien">`
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-rocks.png" alt="happy-rocks" class="classic-icon icon" id="rock">`
    changingTitle.innerText = 'Cat Wins!'
  }
  else if(currentGame.cat.choice === 'alien' && currentGame.dog.choice === 'paper') {
    catChoiceDisplay.innerHTML = `<img src="./assets/happy-alien.png" alt="happy-alien" class="difficult-icon icon" id="alien">`
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-paper.png" alt="happy-paper" class="classic-icon icon" id="paper">`
    changingTitle.innerText = 'Dog Wins!'
  }
  else if(currentGame.cat.choice === 'alien' && currentGame.dog.choice === 'scissors') {
    catChoiceDisplay.innerHTML = `<img src="./assets/happy-alien.png" alt="happy-alien" class="difficult-icon icon" id="alien">`
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-scissors.png" alt="happy-scissors" class="classic-icon icon" id="scissors">`
    changingTitle.innerText = 'Dog Wins!'
  }
  else if(currentGame.cat.choice === 'alien' && currentGame.dog.choice === 'alien') {
    catChoiceDisplay.innerHTML = `<img src="./assets/happy-alien.png" alt="happy-alien" class="difficult-icon icon" id="alien">`
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-alien.png" alt="happy-alien" class="difficult-icon icon" id="alien">`
    changingTitle.innerText = 'It\'s a Draw!'
  }
  else if(currentGame.cat.choice === 'alien' && currentGame.dog.choice === 'lizard') {
    catChoiceDisplay.innerHTML = `<img src="./assets/happy-alien.png" alt="happy-alien" class="difficult-icon icon" id="alien">`
    dogChoiceDisplay.innerHTML = `<img src="./assets/lizard.png" alt="lizard" class="difficult-icon icon" id="lizard">`
    changingTitle.innerText = 'Cat Wins!'
  }
  else if(currentGame.cat.choice === 'lizard' && currentGame.dog.choice === 'rock') {
    catChoiceDisplay.innerHTML = `<img src="./assets/lizard.png" alt="lizard"class="difficult-icon icon" id="lizard">`
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-rocks.png" alt="happy-rocks" class="classic-icon icon" id="rock">`
    changingTitle.innerText = 'Dog Wins!'
  }
  else if(currentGame.cat.choice === 'lizard' && currentGame.dog.choice === 'paper') {
    catChoiceDisplay.innerHTML = `<img src="./assets/lizard.png" alt="lizard" class="difficult-icon icon" id="lizard">`
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-paper.png" alt="happy-paper" class="classic-icon icon" id="paper">`
    changingTitle.innerText = 'Cat Wins!'
  }
  else if(currentGame.cat.choice === 'lizard' && currentGame.dog.choice === 'scissors') {
    catChoiceDisplay.innerHTML = `<img src="./assets/lizard.png" alt="lizard" class="difficult-icon icon" id="lizard">`
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-scissors.png" alt="happy-scissors" class="classic-icon icon" id="scissors">`
    changingTitle.innerText = 'Cat Wins!'
  }
  else if(currentGame.cat.choice === 'lizard' && currentGame.dog.choice === 'alien') {
    catChoiceDisplay.innerHTML = `<img src="./assets/lizard.png" alt="lizard" class="difficult-icon icon" id="lizard">`
    dogChoiceDisplay.innerHTML = `<img src="./assets/happy-alien.png" alt="happy-alien" class="difficult-icon icon" id="alien">`
    changingTitle.innerText = 'Dog Wins!'
  }
  else if(currentGame.cat.choice === 'lizard' && currentGame.dog.choice === 'lizard') {
    catChoiceDisplay.innerHTML = `<img src="./assets/lizard.png" alt="lizard" class="difficult-icon icon" id="lizard">`
    dogChoiceDisplay.innerHTML = `<img src="./assets/lizard.png" alt="lizard" class="difficult-icon icon" id="lizard">`
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
  setTimeout(1500)

}

function playGame(event) {
  displayBoth(event)
  updateWinDisplay()
  displayChangeGameButton()
  reset()
}