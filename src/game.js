class Game{
  constructor() {
    this.cat = new Player('Cat', '😸')
    this.dog = new Player('Dog', '🐶')
    this.optionsClassic = ['rock', 'paper', 'scissors']
    this.optionsDifficult = ['rock', 'paper', 'scissors', 'alien', 'lizard']
  }

      /*Lizard beats paper and scissors, loses to rock and alien
      Alien beats lizard and rock, loses to paper and scissors */

  takeTurnClassic(choice) {
    this.cat.choice = choice 
    this.dog.choice = this.dog.getRandomIcon(this.optionsClassic)
  }

  takeTurnDifficult(choice) {
    this.cat.choice = choice
    this.dog.choice = this.dog.getRandomIcon(this.optionsDifficult)
  }

  checkWins() {
    if (this.cat.choice === 'rock' && this.dog.choice === 'scissors') {
       this.cat.wins += 1
    }
    else if (this.cat.choice === 'paper' && this.dog.choice === 'scissors') {
      this.dog.wins += 1
    }
    else if (this.cat.choice === 'scissors' && this.dog.choice === 'paper') {
      this.cat.wins += 1
    }
    else if (this.cat.choice === 'rock' && this.dog.choice === 'paper') {
      this.dog.wins += 1
    }
    else if (this.cat.choice === 'paper' && this.dog.choice === 'rock') {
      this.cat.wins += 1
    }
    else if (this.cat.choice === 'scissors' && this.dog.choice === 'rock') {
      this.dog.wins += 1
    }
  }
}