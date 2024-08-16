import React, { useState } from "react";
import { useDrop } from "react-dnd";
import Card from "./Card";

const Canvas = () => {
  const [cards, setCards] = useState([]);

  const [{ isOver }, drop] = useDrop({
    accept: "CARD",
    drop: (item, monitor) => {
      const offset = monitor.getSourceClientOffset();
      setCards([...cards, { ...item, left: offset.x, top: offset.y }]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className="w-full h-screen bg-gray-100 overflow-scroll relative">
      {cards.map((card, index) => (
        <Card key={index} id={card.id} text={card.text} left={card.left} top={card.top} />
      ))}
    </div>
  );
};

export default Canvas;
