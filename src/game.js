class Game{
  constructor() {
    this.cat = new Player('Cat', token, choice)
    this.dog = new Player('Dog', token, choice)
    this.classic = ['rock', 'paper', 'scissors']
    this.difficult = ['rock', 'paper', 'scissors', 'alien', 'lizard']
      /*Lizard beats paper and scissors, loses to rock and alien
      Alien beats lizard and rock, loses to paper and scissors */
    this.classicIcons = [
      './assets/happy-rocks.png',
      './assests/happy-paper.png',
      '.assets/happy-scissors.png'
    ]
    this.difficultIcons = [
      './assets/happy-rocks.png',
      './assests/happy-paper.png',
      '.assets/happy-scissors.png',
      './assets/happy-alien.png',
      './assets/lizard.png'
    ]
  }

  takeTurnClassic() {

  }

  takeTurnDifficult() {

  }
}