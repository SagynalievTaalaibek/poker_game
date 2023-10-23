import React from 'react';

interface Props {
  rank: string;
  suit: string;
}

const CardComponent: React.FC<Props> = ({rank, suit}) => {
  const findSymbol = (suit: string) => {
    const symbols = ['diams', 'hearts', 'clubs', 'spades'];

    switch (suit) {
      case symbols[0]:
        return '♦';
      case symbols[1]:
        return '♥';
      case symbols[2]:
        return '♣';
      case symbols[3]:
        return '♠';
    }
  };

  const symbol = findSymbol(suit);

  return (
    <>
      <span className={'card rank-' + rank + ' ' + suit}>
        <span className="rank">{rank.toUpperCase()}</span>
        <span className="suit">{symbol}</span>
      </span>
    </>
  );
};

export default CardComponent;