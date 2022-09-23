class Player {
  constructor(name, token, choice) {
    this.playerName = name
    this.token = token
    this.wins = 0
    this.choice = choice
  }

  getRandomIcon(array) {
    Math.floor(Math.random() * array.length)
  }


}