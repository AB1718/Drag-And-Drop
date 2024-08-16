import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { Resizable } from "react-resizable";
import "react-resizable/css/styles.css";

const Card = ({ id, text, left, top }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "CARD",
    item: { id, left, top },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <Resizable
      width={200}
      height={100}
      className="absolute"
      style={{ left, top }}
    >
      <div
        ref={drag}
        className={`p-4 bg-white rounded shadow-lg ${isDragging ? "opacity-50" : ""}`}
      >
        <p>{text.substring(0, 50)}...</p>
        <button
          onClick={() => setIsPopupOpen(true)}
          className="text-blue-500 underline"
        >
          Show More
        </button>

        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg">
              <h2 className="text-xl mb-4">Card Details</h2>
              <p>{text}</p>
              <button
                onClick={() => setIsPopupOpen(false)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </Resizable>
  );
};

export default Card;
