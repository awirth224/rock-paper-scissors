class Player {
  constructor(name, token) {
    this.playerName = name
    this.token = token
    this.wins = 0
    this.fighter = ''
  }

  getRandomIcon(array) {
    return Math.floor(Math.random() * array.length)
  }

}