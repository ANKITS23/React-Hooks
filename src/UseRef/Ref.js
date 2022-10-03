import React, { useRef } from "react";

function Ref() {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.value = "";
  };
  return (
    <div>
      <h1>Abc</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default Ref;
