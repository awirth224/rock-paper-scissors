class Player {
  constructor(name, token) {
    this.playerName = name
    this.token = token
    this.wins = 0
    this.choice = ''
  }

  getRandomIcon(array) {
    return Math.floor(Math.random() * array.length)
  }

}