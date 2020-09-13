import React, { useEffect, useState } from "react";
import "./App.css";
import { gameSubject } from "./Game";
import Board from "./Board";
function App() {
  const [board, setBoard] = useState([]);
  useEffect(() => {
    // Subscribe to observable
    // Will fire callback everytime game changes
    const subscribe = gameSubject.subscribe((game) => {
      setBoard(game.board);
    });

    // Unsubscribe
    return () => subscribe.unsubscribe();
  }, []);
  // Run useEffect only once

  return (
    <div className="App">
      <Board board={board} />
    </div>
  );
}

export default App;
