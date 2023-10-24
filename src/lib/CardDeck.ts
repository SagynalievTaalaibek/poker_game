import Card from './Card';

class CardDeck {
  cardDeck: Card[] = [];
  ranks = ['diams', 'hearts', 'clubs', 'spades'];
  suits = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];

  constructor() {
    for (let i = 0; i < 13; i++) {
      for (let j: number = 0; j < 4; j++) {
        this.cardDeck.push(new Card(this.suits[i], this.ranks[j]));
      }
    }
  }

  getCard (): Card {
      const randomCard = this.cardDeck.splice(Math.floor(Math.random() * (this.cardDeck.length)) + 1, 1);
      return randomCard[0];
  }

  getCards (howMany: number): Card[] {
    const cards: Card[] = [];

    for (let i = 0; i < howMany; i++) {
      cards.push(this.getCard());
    }

    return  cards;
  }
}

export default CardDeck;
