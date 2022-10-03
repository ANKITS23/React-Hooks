import React, { useState } from "react";

const State = () => {
  const [inputValue, setInputValue] = useState("Abc");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input className="bg-red-100  w-full"  placeholder="Enter Something..." onChange={onChange} />
      <div className="bg-red-100 text-2xl">{inputValue}</div>
    </div>
  );
};

export default State;
