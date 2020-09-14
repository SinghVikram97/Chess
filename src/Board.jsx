import React from "react";
import BoardSquare from "./BoardSquare";
function Board({ board }) {
  //console.log(board);
  //Array of array each array has length 8
  // first 2 are filed and last 2 are filed with pieces rest null
  // console.log(board.flat()); // convert to 1d array of size 64
  function getXYPosition(i) {
    const x = i % 8;
    const y = Math.abs(Math.floor(i / 8) - 7); // array starts at 0
    return { x, y };
  }
  function isBlack(i) {
    const { x, y } = getXYPosition(i);
    return (x + y) % 2 === 1;
    // odd positions
  }
  return (
    <div className="board">
      {board.flat().map((piece, i) => {
        return (
          <div key={i} className="square">
            {/* {type,color} */}
            <BoardSquare piece={piece} black={isBlack(i)} />
          </div>
        );
      })}
    </div>
  );
}

export default Board;
