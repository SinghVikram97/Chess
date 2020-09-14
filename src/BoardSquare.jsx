import React from "react";
import Square from "./Square";
import Piece from "./Piece";
function BoardSquare({ piece }) {
  return (
    <div>
      <Square>
        <Piece piece={piece} />
      </Square>
    </div>
  );
}

export default BoardSquare;
