class Game{
  constructor() {
    this.cat = new Player('Cat', token, choice)
    this.dog = new Player('Dog', token, choice)
    this.options = ['rock', 'paper', 'scissors', 'alien', 'lizard']
    this.winOptions = {
      rock: [scissors,lizard],
      paper: [rock,alien],
      scissors:[paper],
      alien:[lizard,rock],
      lizard:[paper, scissors]
    } 
  }

      /*Lizard beats paper and scissors, loses to rock and alien
      Alien beats lizard and rock, loses to paper and scissors */

  takeTurnClassic(choice) {
    this.cat.choiceClassic = choice 
    this.dog.choiceClassic = this.dog.getRandomIcon(this.options)
  }


  checkWins() {

  }
}