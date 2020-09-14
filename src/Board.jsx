import React from "react";

function Board({ board }) {
  //console.log(board);
  //Array of array each array has length 8
  // first 2 are filed and last 2 are filed with pieces rest null
  // console.log(board.flat()); // convert to 1d array of size 64
  return (
    <div className="board">
      {board.flat().map((piece, i) => {
        return (
          <div key={i} className="square">
            {/* {type,color} */}
            <p>{JSON.stringify(piece)}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Board;