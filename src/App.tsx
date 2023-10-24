import './App.css';
import CardComponent from './CardComponent/CardComponent';
import CardDeck from './lib/CardDeck';
import {useState} from 'react';
import Card from './lib/Card';
import PokerHand from './lib/PokerHand';
import Message from './CardComponent/Message';

const App = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [combination, setCombination] = useState('Combination');


  const getCardsFromDeck = () => {
    const cardDeck = new CardDeck();
    const cardHand = cardDeck.getCards(5);

    setCards(cardHand);

    const pokerHand = new PokerHand(cardHand);
    const combo = pokerHand.getOutcome();

    console.log(pokerHand);
    setCombination(combo);
  };



  if (cards.length <= 0) {
    return (
      <div className="playingCards faceImages">
        <div>
          <button onClick={getCardsFromDeck}>Раздать карту</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="playingCards faceImages">
        <CardComponent rank={cards[0].rank} suit={cards[0].suit}/>
        <CardComponent rank={cards[1].rank} suit={cards[1].suit}/>
        <CardComponent rank={cards[2].rank} suit={cards[2].suit}/>
        <CardComponent rank={cards[3].rank} suit={cards[3].suit}/>
        <CardComponent rank={cards[4].rank} suit={cards[4].suit}/>
        <div>
          <button onClick={getCardsFromDeck}>Раздать карту</button>
        </div>
        <Message message={combination}/>
      </div>
    );
  }
};

export default App;
