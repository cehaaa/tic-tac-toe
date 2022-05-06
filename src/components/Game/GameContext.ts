import React from "react";

// props
import GameContextProps from "./GameContextProps";

const defaultValue: GameContextProps = {
	board: [],
	setBoard: () => {},

	turn: "x",
	setTurn: () => {},

	gameStatus: "play",
	setGameStatus: () => {},

	isGameOver: false,
	setIsGameOver: () => {},

	boardInitialValue: [],
};
export const GameContext = React.createContext<GameContextProps>(defaultValue);

export default GameContext;
