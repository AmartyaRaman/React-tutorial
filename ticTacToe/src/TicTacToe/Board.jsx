import React, { useState } from 'react';
import Square from './Square';

const Board = () => {

  let [state, setState] = useState(Array(9).fill(null));
  let [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (i) => {
    if (state[i] !== null) return;
    
    const copyState = [...state];
    copyState[i] = isXTurn ? 'X' : 'O';
    setState(copyState);
    setIsXTurn(!isXTurn);
  }

  const checkWinner = () => {
    const winConditions = [ 
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6] 
    ]
    
    for (let logic of winConditions) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }


    return false;
  }

  const isWinner = checkWinner();

  const resetBoard = () => {
    setState(Array(9).fill(null));
  }

  return (
    <div className='flex flex-col  align-center justify-center m-4'>
      {isWinner ? 
      <p>{isWinner} won <button onClick={resetBoard} className="bg-green-500 rounded-2xl p-2 text-white font-bold cursor-pointer">Play again</button></p> 

      : 

      <>
      <h4 className='font-bold ml-16 mb-5'>Player {isXTurn ? "X" : "O"} turn!!</h4>
      <div className='flex'>
        <Square onClick={() => handleClick(0)} value={state[0]} />
        <Square onClick={() => handleClick(1)} value={state[1]} />
        <Square onClick={() => handleClick(2)} value={state[2]} />
      </div>
      <div className='flex'>
        <Square onClick={() => handleClick(3)} value={state[3]} />
        <Square onClick={() => handleClick(4)} value={state[4]} />
        <Square onClick={() => handleClick(5)} value={state[5]} />
      </div>
      <div className='flex'>
        <Square onClick={() => handleClick(6)} value={state[6]} />
        <Square onClick={() => handleClick(7)} value={state[7]} />
        <Square onClick={() => handleClick(8)} value={state[8]} />
      </div>
      </>
      }
    </div>
  );
};

export default Board;