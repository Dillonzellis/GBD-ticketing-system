"use client";

import { useState } from "react";

const Button = () => {
  const [id, setId] = useState(0);
  const generateUniqueNumbers = () => {
    const num = Math.floor(Math.random() * 900000000 + 100000000);
    setId(num);
  };
  return (
    <div className="space-y-8">
      <button onClick={generateUniqueNumbers} className="border-2 p-4">
        generateNumber
      </button>
      <div className="">{id}</div>
    </div>
  );
};

export default Button;
