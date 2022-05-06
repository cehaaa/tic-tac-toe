import { Dispatch, SetStateAction } from "react";

// interface
import CellInterface from "../../interfaces/CellInterface";

export interface GameContextProps {
	board: CellInterface[];
	setBoard: Dispatch<SetStateAction<CellInterface[]>>;

	turn: string;
	setTurn: Dispatch<SetStateAction<string>>;

	gameStatus: string;
	setGameStatus: Dispatch<SetStateAction<string>>;

	isGameOver: boolean;
	setIsGameOver: Dispatch<SetStateAction<boolean>>;

	boardInitialValue: CellInterface[];
}

export default GameContextProps;
