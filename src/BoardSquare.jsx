import React from "react";
import Square from "./Square";
import Piece from "./Piece";
function BoardSquare({ piece }) {
  return (
    <div>
      <Square>{piece && <Piece piece={piece} />}</Square>
    </div>
  );
}

export default BoardSquare;
