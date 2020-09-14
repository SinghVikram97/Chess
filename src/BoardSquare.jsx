import React from "react";
import Square from "./Square";
import Piece from "./Piece";
function BoardSquare({ piece, black }) {
  return (
    <div className="board-square">
      <Square black={black}>{piece && <Piece piece={piece} />}</Square>
    </div>
  );
}

export default BoardSquare;
