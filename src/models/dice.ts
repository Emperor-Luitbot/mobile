export default class Dice {
  readonly numberOfDices: number;
  readonly dice: number;

  formatDice = /(\d*)d(\d+)/;

  constructor(dice: string) {
    const match = dice.match(this.formatDice);
    console.log("match", match);
    if (match === null) {
      throw new Error(`Dice must have ${this.formatDice} format`);
    }

    this.numberOfDices = parseInt(match[1]) || 1;
    this.dice = parseInt(match[2]);
  }

  roll() {
    let total = 0;
    for (let i = 0; i < this.numberOfDices; i++) {
      total += this.rollDice();
    }

    return total;
  }

  private rollDice() {
    return Math.ceil(Math.random() * this.dice);
  }
}
