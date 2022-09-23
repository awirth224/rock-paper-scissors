class Player {
  constructor(name, token, choice) {
    this.playerName = name
    this.token = token
    this.wins = 0
    this.choiceClassic = choice
    this.choiceDifficult = choice
  }

  getRandomIcon(array) {
    Math.floor(Math.random() * array.length)
  }


}