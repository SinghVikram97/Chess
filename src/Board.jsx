import React from "react";

function Board({ board }) {
  //console.log(board);
  //Array of array each array has length 8
  // first 2 are filed and last 2 are filed with pieces rest null
  return (
    <div className="board">
      {board.map((piece, i) => {
        return (
          <div key={i}>
            <p>{JSON.stringify(piece)}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Board;
