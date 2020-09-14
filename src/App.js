import React, { useEffect, useState } from "react";
import "./App.css";
import { gameSubject, resetGame, initGame } from "./Game";
import Board from "./Board";
function App() {
  const [board, setBoard] = useState([]);
  const [isGameOver, setIsGameOver] = useState();
  const [result, setResult] = useState();
  const [turn, setTurn] = useState();
  useEffect(() => {
    // Subscribe to observable
    // Will fire callback everytime game changes
    initGame();
    const subscribe = gameSubject.subscribe((game) => {
      console.log(game);
      setBoard(game.board);
      setIsGameOver(game.isGameOver);
      setResult(game.result);
      setTurn(game.turn);
    });

    // Unsubscribe
    return () => subscribe.unsubscribe();
  }, []);
  // Run useEffect only once
  // console.log(isGameOver);
  return (
    <div className="container">
      {isGameOver && (
        <h2 className="vertical-text">
          GAME OVER
          <button onClick={resetGame}>
            <span className="vertical-text">NEW GAME</span>
          </button>{" "}
        </h2>
      )}
      <div className="board-container">
        <Board board={board} turn={turn} />
      </div>
      {result && <p className="vertical-text">{result}</p>}
    </div>
  );
}

export default App;
