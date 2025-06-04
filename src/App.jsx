import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive");
  let [value, setValue] = useState(0);
  function updateValue(val) {
    if (val > 0) {
      value += val;
      setValue(value);
    }
    else {
      value -= val;
      setValue(-value);
    }
  }
  return (
    <>
      <div className="w-full h-screen duration-200 ease-in"
        style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap start-7 top-7 flex-col p-2">
          <div className="flex flex-wrap flex-col gap-3 justify-center  shadow-lg bg-white px-2 py-5 rounded-xl">
            <button onClick={() => setColor('red')} className="outline-none px-4 py-1 rounded-full text-white font-semibold cursor-pointer bg-red-500">Red</button>
            <button onClick={() => setColor('green')} className="outline-none px-4 py-1 rounded-full text-white font-semibold cursor-pointer bg-green-500">Green</button>
            <button onClick={() => setColor('purple')} className="outline-none px-4 py-1 rounded-full text-white font-semibold cursor-pointer bg-fuchsia-500">Fuchsia</button>
            <button onClick={() => setColor('black')} className="outline-none px-4 py-1 rounded-full text-white font-semibold cursor-pointer bg-black">Black</button>
            <button onClick={() => updateValue(40)} className="outline-none px-4 py-1 rounded-full text-white font-semibold cursor-pointer bg-gray-600">Forward</button>
            <button onClick={() => updateValue(-40)} className="outline-none px-4 py-1 rounded-full text-white font-semibold cursor-pointer bg-gray-600">Backward</button>
          </div>
        </div>
        <div className="fixed flex flex-wrap start-7 bottom-10 flex-col">
          <div className="bg-white border border-gray-500 border-2 w-20 h-20 rounded-full duration-500 ease-out" style={{ translate: value + 'px' }}></div>
        </div>
      </div>
    </>
  )
}

export default App
