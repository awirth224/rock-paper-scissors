class Player {
  constructor(name, token, icon) {
    this.playerName = name
    this.token = token
    this.wins = 0
    this.choice = icon || getRandomIcon()
    this.choicesClassic = ['rock', 'paper', 'scissors']
    this.choicesDifficult = ['rock', 'paper', 'scissors', 'alien', 'lizard']
    /*Lizard beats paper and scissors, loses to rock and alien
      Alien beats lizard and rock, loses to paper and scissors */
  }

  getRandomIcon(array) {
    Math.floor(Math.random() * array.length)
  }

  takeTurnClassic() {

  }

  takeTurnDifficult() {

  }

}