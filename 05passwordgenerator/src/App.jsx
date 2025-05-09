import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState();

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcddefghijklmnopqrstuvwxyz";

    if (numbers) str += "0123456789";
    if (characters) str += "!@#$%^&*-+=_{}`~[]?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numbers, characters, setPassword]);

  const copyPassToCb = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current.setSelectionRange(0, 30);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbers, characters, passwordGenerator]);

  return (
    <>
      <h1 className="text-4xl text-center text-white mt-4">
        Password Generator
      </h1>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-8 bg-gray-700">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 bg-white"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPassToCb}
            className="outline-none bg-blue-700 text-white px-4 py-2 shrink-0"
          >
            Copy
          </button>
        </div>

        <div className="flex flex-col gap-y-4 text-sm text-white">
          <div className="flex items-center gap-x-2">
            <label>Length: {length}</label>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer flex-1"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={numbers}
              id="numberInput"
              onChange={() => {
                setNumbers((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Include Numbers</label>
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={characters}
              id="charactersInput"
              onChange={() => {
                setCharacters((prev) => !prev);
              }}
            />
            <label htmlFor="charactersInput">Include Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
