import "./App.css";
import { useState,useRef } from "react";

function App() {

  const [count, setCount] = useState(0);
  const divRef = useRef(null);

  
  function decrementHandler(){
    // let value=count;
    setCount(count-1);
    divRef.current.textContent=count+" was decremented, and it becomes "+ (count-1);

  }

  function incrementHandler(){
    let value=count;
    setCount(count+1);
    divRef.current.textContent=value+" was incremented, and it becomes "+ (value+1);

  }
  
  function ResetHandler(){
    setCount(0);
    divRef.current.textContent="You have reset it."
  }


  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
        <div className="text-[#0398d4] font-medium text-2xl">Increment and Decrement</div>
        <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]"> 
            <button onClick={decrementHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
              -
            </button>
            <div className="font-bold gap-12 text-5xl">
              {count}
            </div>
            <button onClick={incrementHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
              +
            </button>
        </div>
        <div>
          <button onClick={ResetHandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg"> Reset </button>
        </div>
        <div id="displaybox"  class="w-72 h-52 border-2 border-black rounded-lg bg-blue-200 p-5 text-center text-gray-800">
            <h2 id="box" ref={divRef} className="text-2xl">Start</h2>
        </div>

    </div>
  );
}

export default App;
