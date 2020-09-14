import React from "react";

function Piece({ piece: { type, color } }) {
  const pieceImage = require(`./assets/${type}_${color}.png`);
  return (
    <div className="piece-container">
      <img src={pieceImage} className="piece" />
    </div>
  );
}

export default Piece;
