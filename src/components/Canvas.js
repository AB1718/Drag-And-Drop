// src/components/Canvas.js
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import Card from './Card';
import { ItemTypes } from './ItemTypes';

const Canvas = () => {
  const [cards, setCards] = useState([
    { id: 1, text: 'This is a sample text for card 1' },
    { id: 2, text: 'This is a sample text for card 2' },
  ]);

  const moveCard = (draggedId, targetId) => {
    const draggedIndex = cards.findIndex(card => card.id === draggedId);
    const targetIndex = cards.findIndex(card => card.id === targetId);
    const newCards = [...cards];
    const [movedCard] = newCards.splice(draggedIndex, 1);
    newCards.splice(targetIndex, 0, movedCard);
    setCards(newCards);
  };

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
  });

  return (
    <div
      ref={drop}
      style={{
        width: '100%',
        height: '100vh',
        overflow: 'scroll',
        position: 'relative',
        border: '1px solid gray',
      }}
    >
      {cards.map(card => (
        <Card
          key={card.id}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      ))}
    </div>
  );
};

export default Canvas;
