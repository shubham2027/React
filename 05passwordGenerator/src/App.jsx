import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passwordGenerator = useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numberAllowed) str += "0123456789";
      if(charAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?";

      for(let i=1; i<length; i++){
        let index = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(index);
      }
      setPassword(pass);
    }, [length, numberAllowed, charAllowed]); // these are the dependencies of useCallback where if any one of them changes, the function will be recreated and recalled 

    useEffect(() => {
      passwordGenerator()
    }, [length, numberAllowed, charAllowed]) // these are the dependencies of useEffect where if any one of them changes, the effect will be recalled
    
    //useRef hook 
    const passwordRef = useRef(null);

    const copyPassToClipboard = () => {
      passwordRef.current?.select(); // selecting the input element if it exists
      window.navigator.clipboard.writeText(password)
    }

  return (
    <>
      <div className=" mt-10 justify-center   text-white text-2xl bg-gray-800 p-4 rounded-md">
      <h1 className="text-white text-3xl text-center">Password Generator</h1>


        <div className=" shadow-md p-4 rounded-lg  m-3 ">
          <input
             type="text"
            value={password}
            className='outline-none bg-gray-600 text-white rounded-md p-2 mr-3'
            placeholder='Generated Password'
            readOnly
            ref={passwordRef} // attaching the ref to the input element
          /> <button className="bg-gray-600  rounded-full shadow-lg px-5 py-3 hover:bg-gray-500 transition active:bg-blue-700"
            onClick={copyPassToClipboard} // function to copy the password to clipboard
          >Copy</button>
        </div>

        <div className='flex flex-col items-center justify-center gap-3'>
          <input type="range" 
          min={6}
          max={20}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          /> <label >Length: {length}</label>
        </div>

        <div className='items-center justify-center gap-5 flex '>
          <input type="checkbox" 
          value={numberAllowed}
          onChange={() => setNumberAllowed((prev) => !prev)} // toggling the value of numberAllowed when clicked changing the previous value to the opposite value
          /> <label >Numbers</label>
        </div>

        <div className='items-center justify-center gap-5 flex '>
          <input type="checkbox" 
          value={charAllowed}
          onChange={() => setCharAllowed((prev) => !prev)} // toggling the value of charAllowed when clicked changing the previous value to the opposite value
          /> <label >Special Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
