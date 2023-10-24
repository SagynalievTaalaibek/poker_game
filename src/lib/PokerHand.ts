import Card from './Card';

class PokerHand {
  constructor(public cardHand: Card[]) {}

  getOutcome() {
    const messages = [
      'Одна пара',
      'Две пары',
      'Тройка',
      'Флэш',
      'Старшая карта'
    ];

    const pairs:string[] = [];
    let messageOut: string;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < i; j++) {
        if (this.cardHand[i].rank === this.cardHand[j].rank) {
          pairs.push(this.cardHand[j].rank);
        }
      }
    }

    let count = 0;

    for (let i = 0; i < 5; i++) {
      if (this.cardHand[0].suit === this.cardHand[i].suit) {
        count++;
      }
    }

    switch (pairs.length) {
      case 4:
        messageOut = messages[2];
        break;
      case 3:
        messageOut = messages[2];
        break;
      case 2:
        messageOut = messages[1];
        break;
      case 1:
        messageOut = messages[0];
        break;
      default:
        messageOut = messages[4];
    }


    if (count === 5) {
      messageOut = messages[3];
    }

    return messageOut;
  }
}

export default PokerHand;