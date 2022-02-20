interface Row {
  name: string;
  description: string;
  range: number[];
}

interface Dice {}

export default class Table {
  readonly name: string;
  readonly rows: Row[];
  readonly die: Dice;

  getItem(roll: number): string {
    return "tute";
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
