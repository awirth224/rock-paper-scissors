class Game{
  constructor() {
    this.cat = new Player('Cat', '😸')
    this.dog = new Player('Dog', '🐶')
    this.gameType = 'difficult' || 'classic'
    this.optionsClassic = ['rock', 'paper', 'scissors']
    this.optionsDifficult = ['rock', 'paper', 'scissors', 'alien', 'lizard']
  }

      /*Lizard beats paper and scissors, loses to rock and alien
      Alien beats lizard and rock, loses to paper and scissors */

  takeTurnDog() { 
    var randomIcon = this.dog.getRandomIcon(this.optionsClassic)
    this.dog.choice = this.optionsClassic[randomIcon]
  }

  takeTurnDogDifficult() {
    var randomIcon = this.dog.getRandomIcon(this.optionsDifficult) 
    this.dog.choice = this.optionsDifficult[randomIcon]
  }

  takeTurnCat(choice) {
    this.cat.choice = choice 
    return this.cat.choice
  }



  checkWins() {
    if (this.cat.choice === 'rock' && this.dog.choice === 'scissors') {
       this.cat.wins += 1
       return '😸 Cat Wins!'
    }
    else if (this.cat.choice === 'paper' && this.dog.choice === 'scissors') {
      this.dog.wins += 1
      return '🐶 Dog Wins!'
    }
    else if (this.cat.choice === 'scissors' && this.dog.choice === 'paper') {
      this.cat.wins += 1
      return '😸 Cat Wins!'
    }
    else if (this.cat.choice === 'rock' && this.dog.choice === 'paper') {
      this.dog.wins += 1
      return '🐶 Dog Wins!'
    }
    else if (this.cat.choice === 'paper' && this.dog.choice === 'rock') {
      this.cat.wins += 1
      return '😸 Cat Wins!'
    }
    else if (this.cat.choice === 'scissors' && this.dog.choice === 'rock') {
      this.dog.wins += 1
      return '🐶 Dog Wins!'
    }
  }
}