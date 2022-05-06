import React, { useContext } from "react";

// context
import GameContext from "../Game/GameContext";

const Modal = () => {
	const context = useContext(GameContext);

	const restartGame = () => {
		context.setBoard(context.boardInitialValue);
		context.setTurn("x");
		context.setGameStatus("play");
		context.setIsGameOver(false);
	};

	const displayWinner = (): string => {
		let result: string = "";
		if (context.gameStatus === "draw") {
			result = "Draw";
		} else {
			result = context.turn === "x" ? "Player 1 Win" : "Player 2 Win";
		}

		return result;
	};

	const displayStatusEmoticon = (): string => {
		let result: string = "";
		if (context.gameStatus === "draw") {
			result = "👾";
		} else result = "🏆";

		return result;
	};

	return (
		<div className='fixed z-20 bg-board bg-opacity-50 w-screen h-screen flex items-center justify-center'>
			<div className='bg-board p-5 rounded-xl w-4/12 border-4 flex items-center justify-center flex-col text-5xl'>
				<div>{displayStatusEmoticon()}</div>
				<div className='mt-6 text-3xl'>{displayWinner()}</div>
				<button
					className='text-lg px-5 py-3 rounded-lg bg-game mt-6 hover:bg-gray-900 duration-200'
					onClick={restartGame}>
					Play Again
				</button>
			</div>
		</div>
	);
};

export default Modal;
