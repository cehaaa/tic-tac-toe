import React, { useContext } from "react";

// context
import GameContext from "../Game/GameContext";

// props
import BlockProps from "./BlockProps";

// icons
import XIcon from "../Icons/XIcon";
import OICon from "../Icons/OICon";

const Block: React.FC<BlockProps> = ({ value, index }) => {
	const context = useContext(GameContext);

	const handleClick = () => {
		if (context.gameStatus === "play" && value === "") {
			const temp = [...context.board];
			context.board[index].value = context.turn;
			context.setBoard(temp);

			if (!isBoardFullFill()) {
				if (!checkGameOver()) {
					context.turn === "x" ? context.setTurn("o") : context.setTurn("x");
				}
			} else {
				// draw
				context.setIsGameOver(true);
				context.setGameStatus("draw");
			}
		}
	};

	const isBoardFullFill = (): boolean => {
		let counter: number = 0;
		for (let i = 0; i < context.board.length; i++) {
			if (context.board[i].value === "") {
				counter++;
			}
		}
		return counter >= 1 ? false : true;
	};

	const checkGameOver = (): boolean => {
		let res: boolean = false;
		if (checkPattern(context.board[index].value)) {
			context.setGameStatus("game over");
			context.setIsGameOver(true);

			res = true;
		}

		return res;
	};

	const checkPattern = (value: string): boolean => {
		const patterns: Array<number[]> = [
			// horizontal
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],

			// vertical
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],

			// diagoanal
			[0, 4, 8], // right
			[2, 4, 6], // left
		];
		return patterns.some(pattern => {
			return pattern.every(index => {
				return context.board[index].value === value;
			});
		});
	};

	const blockValue = () => {
		if (value === "x") {
			return <XIcon />;
		} else if (value === "o") {
			return <OICon />;
		} else return <div></div>;
	};

	return (
		<div
			className={`h-32 w-32 rounded-lg flex items-center justify-center cursor-pointer bg-gray-100`}
			onClick={handleClick}>
			{blockValue()}
		</div>
	);
};

export default Block;
