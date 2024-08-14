// src/components/Canvas.js
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import Card from './Card';
import { ItemTypes } from './ItemTypes';
import './Canvas.css'; // Importing CSS for Canvas component

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
      className="canvas"
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
