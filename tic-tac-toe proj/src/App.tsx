import { useState } from 'react';
import './App.css'
import Squre from './components/Squre'

type SqureType = 'X'[] | 'O'[] | null[];

const calculateWinners = (squre: SqureType) => {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
  ]
  for(let i = 0; i < lines.length; i++){
    const [a, b, c] = lines[i];
    if(squre[a] && squre[a] === squre[b] && squre[a] === squre[c]){
      return squre[a];
    }
  }
  return null;

}
function App() {
  const [squre, setSqure] = useState<'X'[] | 'O'[] | null[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  
  const handleClick = (i: number) => {
    if(calculateWinners(squre) || squre[i] !== null){
      return;
    }
    const nextSqure = squre.slice();
    if(xIsNext){
      nextSqure[i] = 'X';
    } else{
      nextSqure[i] = 'O';
    }
    setSqure(nextSqure);
    setXIsNext(!xIsNext);
  }
  
  const winnner = calculateWinners(squre);
  let status;
  if(winnner){
    status = 'Winner ' + winnner;
  } else{
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');

  }
  return (
    <>
    <div>{status}</div>
      <div>
        <Squre value={squre[0]} onSqureClick={() => handleClick(0)} />
        <Squre value={squre[1]} onSqureClick={() => handleClick(1)} />
        <Squre value={squre[2]} onSqureClick={() => handleClick(2)} />
      </div>
      <div>
        <Squre value={squre[3]} onSqureClick={() => handleClick(3)} />
        <Squre value={squre[4]} onSqureClick={() => handleClick(4)} />
        <Squre value={squre[5]} onSqureClick={() => handleClick(5)} />
      </div>
      <div>
        <Squre value={squre[6]} onSqureClick={() => handleClick(6)} />
        <Squre value={squre[7]} onSqureClick={() => handleClick(7)} />
        <Squre value={squre[8]} onSqureClick={() => handleClick(8)} />
      </div>
    </>
  )
}

export default App
