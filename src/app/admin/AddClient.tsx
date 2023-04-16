"use client";
import { useState } from "react";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase";

export const AddClient = () => {
  const [clientName, setClientName] = useState("");
  const [projectNumber, setProjectNumber] = useState("");
  const [monthlyHours, setMonthlyHours] = useState("");
  const [message, setMessage] = useState("");

  const AddClientToDB = async () => {
    try {
      await addDoc(collection(db, "clients"), {
        clientName: clientName,
        projectNumber: projectNumber,
        monthlyHours: monthlyHours,
      });
      setMessage("Client added successfully!");
      setClientName("");
      setProjectNumber("");
      setMonthlyHours("");
    } catch (error) {
      setMessage(`Error adding document: ${error}`);
    }
  };

  return (
    <div>
      <div>AddClient</div>

      <div className="flex max-w-md flex-col gap-8">
        <input
          className="text-black"
          type="text"
          placeholder="Client Name"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />

        <input
          className="text-black"
          type="text"
          placeholder="Project Number"
          value={projectNumber}
          onChange={(e) => setProjectNumber(e.target.value)}
        />

        <input
          className="text-black"
          type="text"
          placeholder="Monthly Hours"
          value={monthlyHours}
          onChange={(e) => setMonthlyHours(e.target.value)}
        />
        <button onClick={AddClientToDB}>Submit</button>
        {/* Display message */}
        {message && <div>{message}</div>}
      </div>
    </div>
  );
};
