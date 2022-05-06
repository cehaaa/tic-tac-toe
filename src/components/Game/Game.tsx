import React, { useContext } from "react";

// components
import Block from "../Block/Block";

// interfaces
import GameContext from "./GameContext";

const Game = () => {
	const context = useContext(GameContext);

	return (
		<div className='grid justify-center grid-rows-3 grid-cols-3 gap-3 bg-board p-5 rounded-xl'>
			{context.board.map((cell, index) => {
				return (
					<Block
						key={index + 1}
						value={cell.value}
						index={index}
						turn={context.turn}
					/>
				);
			})}
		</div>
	);
};

export default Game;
