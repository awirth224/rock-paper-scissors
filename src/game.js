class Game{
  constructor(gameType) {
    this.cat = new Player('Cat', '😸')
    this.dog = new Player('Dog', '🐶')
    this.gameType = gameType
    this.optionsClassic = ['rock', 'paper', 'scissors']
    this.optionsDifficult = ['rock', 'paper', 'scissors', 'alien', 'lizard']
    this.winningCombos = {
      rock: ['scissors', 'lizard'],
      paper: ['rock', 'alien'],
      scissors: ['paper','alien'],
      alien: ['rock', 'lizard'],
      lizard: ['paper', 'scissors']
    }
  }

      /*Lizard beats paper and scissors, loses to rock and alien
      Alien beats lizard and rock, loses to paper and scissors */

  takeTurnDog() { 
    var randomIcon = this.dog.getRandomIcon(this.optionsClassic)
    this.dog.choice = this.optionsClassic[randomIcon]
    return this.dog.choice
  }

  takeTurnDogDifficult() {
    var randomIcon = this.dog.getRandomIcon(this.optionsDifficult) 
    this.dog.choice = this.optionsDifficult[randomIcon]
    return this.dog.choice
  }

  takeTurnCat(choice) {
    this.cat.choice = choice 
    return this.cat.choice
  }



  checkWins() {
    if (this.cat.choice === 'rock' && this.dog.choice === 'rock') {
       return 'It\'s a Draw!'
    }
    else if (this.cat.choice === 'rock' && this.dog.choice === 'paper') {
      this.dog.wins += 1
      return '🐶 Dog Wins!'
    }
    else if (this.cat.choice === 'rock' && this.dog.choice === 'scissors') {
      this.cat.wins += 1
      return '😸 Cat Wins!'
    }
    else if (this.cat.choice === 'rock' && this.dog.choice === 'alien') {
      this.dog.wins += 1
      return '🐶 Dog Wins!'
    }
    else if (this.cat.choice === 'rock' && this.dog.choice === 'lizard') {
      this.cat.wins += 1
      return '😸 Cat Wins!'
    }

    else if (this.cat.choice === 'paper' && this.dog.choice === 'rock') {
      this.cat.wins += 1
      return '😸 Cat Wins!'
    }
    else if (this.cat.choice === 'paper' && this.dog.choice === 'paper') {
      return 'It\'s a Draw!'
    }
    else if (this.cat.choice === 'paper' && this.dog.choice === 'scissors') {
      this.dog.wins += 1
      return '🐶 Dog Wins!'
    }
    else if (this.cat.choice === 'paper' && this.dog.choice === 'alien') {
      this.cat.wins += 1
      return '😸 Cat Wins!'
    }
    else if (this.cat.choice === 'paper' && this.dog.choice === 'lizard') {
      this.dog.wins += 1
      return '🐶 Dog Wins!'
    }

    else if (this.cat.choice === 'scissors' && this.dog.choice === 'rock') {
      this.dog.wins += 1
      return '🐶 Dog Wins!'
    }
    else if (this.cat.choice === 'scissors' && this.dog.choice === 'paper') {
      this.cat.wins += 1
      return '😸 Cat Wins!'
    }
    else if (this.cat.choice === 'scissors' && this.dog.choice === 'scissors') {
      return 'It\'s a Draw!'
    }
    else if (this.cat.choice === 'scissors' && this.dog.choice === 'alien') {
      this.cat.wins += 1
      return '😸 Cat Wins!'
    }
    else if (this.cat.choice === 'scissors' && this.dog.choice === 'lizard') {
      this.dog.wins += 1
      return '🐶 Dog Wins!'
    }

    else if (this.cat.choice === 'alien' && this.dog.choice === 'rock') {
      this.cat.wins += 1
      return '😸 Cat Wins!'
    }
    else if (this.cat.choice === 'alien' && this.dog.choice === 'paper') {
      this.dog.wins += 1
      return '🐶 Dog Wins!'
    }
    else if (this.cat.choice === 'alien' && this.dog.choice === 'scissors') {
      this.dog.wins += 1
      return '🐶 Dog Wins!'
    }
    else if (this.cat.choice === 'alien' && this.dog.choice === 'alien') {
      return 'It\'s a Draw!'
    }
    else if (this.cat.choice === 'alien' && this.dog.choice === 'lizard') {
      this.cat.wins += 1
      return '😸 Cat Wins!'
    }

    else if (this.cat.choice === 'lizard' && this.dog.choice === 'rock') {
      this.dog.wins += 1
      return '🐶 Dog Wins!'
    }
    else if (this.cat.choice === 'lizard' && this.dog.choice === 'paper') {
      this.cat.wins += 1
      return '😸 Cat Wins!'
    }
    else if (this.cat.choice === 'lizard' && this.dog.choice === 'scissors') {
      this.cat.wins += 1
      return '😸 Cat Wins!'
    }
    else if (this.cat.choice === 'lizard' && this.dog.choice === 'alien') {
      this.dog.wins += 1
      return '🐶 Dog Wins!'
    }
    else if (this.cat.choice === 'lizard' && this.dog.choice === 'lizard') {
      return 'It\'s a Draw!'
    }
  }
}