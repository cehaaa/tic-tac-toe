import { useContext } from "react";

import GameContext from "../Game/GameContext";

const GameFooter = () => {
	const context = useContext(GameContext);

	return (
		<div className='bg-board flex items-center rounded-xl w-full h-full text-white my-5 overflow-hidden'>
			<div className='w-6/12 border-r  border-r-gray-300 border-dashed '>
				<div className='flex items-center'>
					<div className='w-14 h-full flex items-center justify-center bg-purple'>
						a
					</div>
					<div className='px-5'>
						<div className='uppercase text-xs'>Player 1</div>
						<div className='text-2xl font-medium'>Ana</div>
					</div>
				</div>
			</div>
			<div className='w-6/12'>
				<div className='flex justify-between items-center'>
					<div className='px-5'>
						<div className='uppercase text-xs'>Player 1</div>
						<div className='text-2xl font-medium'>Ana</div>
					</div>
					<div className='w-14 h-full flex items-center justify-center bg-yellow'>
						a
					</div>
				</div>
			</div>
		</div>
	);
};

export default GameFooter;
