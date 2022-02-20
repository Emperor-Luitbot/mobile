import Dice from "./dice";

interface Row {
  name: string;
  description: string;
  range: number[];
}

export default class Table {
  readonly name: string;
  readonly rows: Row[];
  readonly die: Dice;

  constructor(name: string, rows: Row[], die: string) {
    this.name = name;
    this.rows = rows;
    this.die = new Dice(die);
  }

  getRow(rolledNumber: number): Row {
    return this.rows.find((row: Row): any => {
      return rolledNumber >= row.range[0] && rolledNumber <= row.range[1];
    });
  }

  roll() {
    const numberRolled = this.die.roll();
    return this.getRow(numberRolled);
  }
}

// "name": "Minor Miscast Table",
//     "die": "1d100",
//     "rows": [
//       {
//         "name": "Witchery",
//         "description": "A small sign of Chaos manifests: milk nearby you sours, animals spook, a cold breeze blows, etc.",
//         "range": [1,5]
//       },
