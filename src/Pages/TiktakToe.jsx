import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Confirmation from "../Components/popUp/Confirmation";
import TikTakToewinner from "../Components/popUp/TiktackToeWinner";

function TiktakToe() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [playerTurn, setPlayerTurn] = useState(1)
const [PlayerOne, setPlayerOne] = useState([])
const [PlayerTwo, setPlayerTwo] = useState([])
const [Winner, setWinner] = useState(false)
const [Draw, setDraw] = useState(false)
  const playercheck = (value) => {
   
if(playerTurn)
{
    setPlayerOne(oldArray => [...oldArray, value]);
    setPlayerTurn(0)
}
else{

    setPlayerTwo(oldArray => [...oldArray, value]);
    setPlayerTurn(1)
    
}

cobinationcheck()


  };

const cobinationcheck=()=>
{

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (let combination of winningCombinations) {
     
        const [a, b, c] = combination;
if(PlayerOne.includes(a)&&PlayerOne.includes(b)&&PlayerOne.includes(c))
{

setWinner(true)
}
else if(PlayerTwo.includes(a)&&PlayerTwo.includes(b)&&PlayerTwo.includes(c))
{
 
setWinner(true)
  
}
else if(PlayerOne.concat(PlayerTwo).length===9)
{
setDraw(true)
}
      }


}
  useEffect(()=>
  {
    cobinationcheck()
  },[PlayerOne,PlayerTwo])

useEffect(()=>
{
  setPlayerOne([])
  setPlayerTwo([])
  setDraw(false)

 
},[Winner])

  return (
    <>
     <div className="text-4xl font-bold mt-5 mb-5 flex justify-center">TikTakToe</div>

    <div className="flex gap-5 mb-5 mt-5  justify-center">
        <div className={`border-1 font-bold rounded-md p-2 ${playerTurn==1?"bg-blue-400" :" border-blue-500"}`}>player1</div><div className={`border-1 font-bold rounded-md p-2 ${playerTurn==0?"bg-blue-400" :" border-blue-500"}`}>player2</div>
    </div>
      <div className="flex justify-center">
        <div class="grid grid-cols-3 gap-4">
          {board.map((value, key) => {
          if(PlayerOne.includes(key))
          {
            return (
                <div
                  name={key}
                  key={key}
               
  
                  className="w-20 h-20 border-2 border-black cursor-not-allowed text-center text-4xl flex items-center justify-center"
                >
                 X
                </div>
              );
          }
        else if(PlayerTwo.includes(key))
        {
            return (
                <div
                  name={key}
                  key={key}
              
  
                  className="w-20 h-20 border-2 border-black cursor-not-allowed text-center text-4xl flex items-center justify-center"
                >
                 O
                </div>
              );
        }
        else{
            return (
                <div
                  name={key}
                  key={key}
                  onClick={()=>
                  {
                      playercheck(key)
                  }}
  
                  className="w-20 h-20 border-2 border-black cursor-pointer text-center text-4xl flex items-center justify-center"
                >
                 
                </div>
              );
        }
          })}
        </div>
        
      </div>
      {Draw && <div className="flex justify-center mt-5 "> 
      <div>
      <p className="mb-5 font-bold text-lg text-green-400">game was a Draw</p>

      <button onClick={()=>
      {
        setPlayerOne([])
        setPlayerTwo([])
        setDraw(false)
      }} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
 Play Again
</button>
      </div>
          
          </div>}
      {Winner&&<TikTakToewinner ModalIsOpen={setWinner} data={playerTurn}/>}
    </>
  );
}

export default TiktakToe;
