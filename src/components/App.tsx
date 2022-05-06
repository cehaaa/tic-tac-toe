import React, { useState } from "react";

// components
import Game from "./Game/Game";
import GameHeader from "./GameHeader/GameHeader";
import Modal from "./Modal/Modal";

// context
import GameContext from "./Game/GameContext";

// interface
import CellInterface from "../interfaces/CellInterface";

const App = () => {
	const boardInitialValue: CellInterface[] = [
		{ value: "" },
		{ value: "" },
		{ value: "" },
		{ value: "" },
		{ value: "" },
		{ value: "" },
		{ value: "" },
		{ value: "" },
		{ value: "" },
	];
	const [board, setBoard] = useState<CellInterface[]>(boardInitialValue);
	const [turn, setTurn] = useState<string>("x");
	const [gameStatus, setGameStatus] = useState<string>("play");
	const [isGameOver, setIsGameOver] = useState<boolean>(false);

	const gameContextValue = {
		board: board,
		setBoard: setBoard,

		turn: turn,
		setTurn: setTurn,

		gameStatus: gameStatus,
		setGameStatus: setGameStatus,

		isGameOver: isGameOver,
		setIsGameOver: setIsGameOver,

		boardInitialValue: boardInitialValue,
	};

	return (
		<div className='bg-game text-white w-screen h-screen flex items-center justify-center'>
			<GameContext.Provider value={gameContextValue}>
				{/* <Modal /> */}
				{isGameOver && <Modal />}
				<div>
					<GameHeader />
					<Game />
				</div>
			</GameContext.Provider>
		</div>
	);
};

export default App;
