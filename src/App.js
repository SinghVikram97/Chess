import React, { useEffect, useState } from "react";
import "./App.css";
import { gameSubject, resetGame } from "./Game";
import Board from "./Board";
function App() {
  const [board, setBoard] = useState([]);
  const [isGameOver, setIsGameOver] = useState();
  const [result, setResult] = useState();
  useEffect(() => {
    // Subscribe to observable
    // Will fire callback everytime game changes
    const subscribe = gameSubject.subscribe((game) => {
      console.log(game);
      setBoard(game.board);
      setIsGameOver(game.isGameOver);
      setResult(game.result);
    });

    // Unsubscribe
    return () => subscribe.unsubscribe();
  }, []);
  // Run useEffect only once
  // console.log(isGameOver);
  return (
    <div className="container">
      {
        <h2 className="vertical-text">
          GAME OVER
          <button onClick={resetGame}>
            <span className="vertical-text">NEW GAME</span>
          </button>{" "}
        </h2>
      }
      <div className="board-container">
        <Board board={board} />
      </div>
      {result && <p className="veritcal-text">{result}</p>}
    </div>
  );
}

export default App;
