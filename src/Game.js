// Represent board
import * as Chess from "chess.js";
import { BehaviorSubject } from "rxjs";

// Intialize new chess game
const chess = new Chess();

// Give intial value to observable
export const gameSubject = new BehaviorSubject({});

export function initGame() {
  updateGame();
}

export function resetGame() {
  chess.reset();
  updateGame();
}

export function move(from, to) {
  const legalMove = chess.move({ from, to });
  if (legalMove) {
    updateGame();
  }
}

function updateGame() {
  const isGameOver = chess.game_over();
  const newGame = {
    board: chess.board(),
    isGameOver,
    turn: chess.turn(),
    result: isGameOver ? getGameResult() : null,
  };
  gameSubject.next(newGame);
}

function getGameResult() {
  if (chess.in_checkmate()) {
    const winner = chess.turn() === "w" ? "BLACK" : "WHITE";
    return `CHECKMATE - WINNER - ${winner}`;
  } else if (chess.in_draw()) {
    let reason = "50 - MOVES -RULE";
    if (chess.in_stalemate()) {
      reason = "STALEMATE";
    } else if (chess.in_threefold_repetition()) {
      reason = "REPETITION";
    } else if (chess.insufficient_material()) {
      reason = "INSUFFICIENT_MATERIAL";
    }
    return `DRAW - ${reason}`;
  } else {
    return "UNKNOWN REASON";
  }
}
