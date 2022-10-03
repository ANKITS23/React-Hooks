import React, { useEffect, useState } from "react";
import axios from "axios";

function Effect() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments") //This email coming from an Api.
      .then((response) => {
        setData(response.data[1].email);
        console.log("API WAS CALLED");
      });
  }, []);

  return (
    <div>
      Hello World
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="bg-red-100 p-2"
      >
        Click
      </button>
    </div>
  );
}

export default Effect;
