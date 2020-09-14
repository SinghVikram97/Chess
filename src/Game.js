// Represent board
import * as Chess from "chess.js";
import { BehaviorSubject } from "rxjs";

// Intialize new chess game
const chess = new Chess();

// Give intial value to observable
export const gameSubject = new BehaviorSubject({
  board: chess.board(), // has a property board
});

export function move(from, to) {
  const legalMove = chess.move({ from, to });
  if (legalMove) {
    gameSubject.next({ board: chess.board() });
  }
}
