import { useState } from "react";

function App() {
  // State to track the current player and the game board
  const [board, setBoard] = useState(Array(9).fill(null));
  const Winnnin_patter = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [2, 5, 8],
    [3, 5, 7],
  ];
  function handleClick(id) {}

  return (
    <div className="w-full h-screen bg-slate-500 flex justify-center items-center ">
      <ul className="w-[600px] h-[600px] bg-white grid grid-cols-3 border border-white text-white">
        {board.map((value, idx) => (
          <li
            className="bg-black w-[200px] h-[200px] flex justify-center items-center text-4xl cursor-pointer border "
            onClick={() => handleClick(idx)}
            key={idx}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
