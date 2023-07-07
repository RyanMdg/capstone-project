import React, { useState } from "react";
import "../globals.css";
const EmojiSentence = ({ sentence }) => {
  const words = sentence.split(" ");

  return (
    <div className=" text-white text-[1rem] h-[5rem] px-2 rounded-sm font-semibold my-5 py-3 bg-[#260338]">
      {words.map((word, index) => (
        <React.Fragment key={index}>{word} 🤸 </React.Fragment>
      ))}
    </div>
  );
};

const App = () => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="flex justify-center flex-col w-screen h-screen items-center">
      <h1 className=" uppercase text-[2rem] font-bold">Beshyfy🤸app</h1>
      <div className="  shadow-2xl h-[15rem] rounded-lg bg-[#4a0f6a] p-5">
        <textarea
          className=" w-[30rem] outline-none rounded-md text-white  bg-[#000000b0]"
          value={input}
          onChange={handleChange}
        />
        <EmojiSentence sentence={input} />
      </div>
    </div>
  );
};

export default App;
