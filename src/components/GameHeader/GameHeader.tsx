import { useContext } from "react";

import GameContext from "../Game/GameContext";

const GameHeader = () => {
	const context = useContext(GameContext);

	return (
		<div className=' bg-board p-5 flex justify-center rounded-xl w-full text-white space-x-5 my-5'>
			<div className='text-5xl'>
				<div className=' -mt-2'>
					{context.gameStatus === "play" ? "🕑" : "🏆"}
				</div>
			</div>
			<div>
				<div className='uppercase font-bold text-xs'>status</div>
				<div className='text-2xl font-medium'>
					Play Player {context.turn === "x" ? "1" : "2"}
				</div>
			</div>
		</div>
	);
};

export default GameHeader;
