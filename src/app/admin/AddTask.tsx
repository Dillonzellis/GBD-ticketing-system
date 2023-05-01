import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../firebase";

type AddTaskProps = {
  selectedClientId: string | null;
};

const AddTask = () => {
  // update clientDocId to the prop passed from the parent component
  const clientDocId = "5MRSuHGpVH8y4VBUBdPk";

  const currentDate = new Date();

  const [uniqueId, setUniqueId] = useState("");
  const [duration, setDuration] = useState("");
  const [message, setMessage] = useState("");

  // Generate Unique ID on button click
  const generateUniqueId = () => {
    const randomNum = Math.floor(Math.random() * 1000000000000000); // generates a random number between 0 and 999999999999999
    const uniqueId = String(randomNum).padStart(15, "0"); // convert the number to a string and pad with leading zeros to ensure it is 15 digits long
    setUniqueId(uniqueId);
    // return uniqueId;
  };

  // Add to DB
  const AddTaskToDB = async () => {
    try {
      await addDoc(collection(db, "clients", clientDocId, "tasks"), {
        uniqueId: uniqueId,
        date: currentDate.toDateString(),
        duration: duration,
      });
      setMessage("Client added successfully!");
      setUniqueId("");
      // setDate("");
      setDuration("");
    } catch (error) {
      setMessage(`Error adding document: ${error}`);
    }
  };

  return (
    <div className="mb-12 space-y-2">
      <div>AddTask Component</div>
      {/* Generate Unique ID */}
      <button onClick={generateUniqueId} className="border-2 p-1">
        Generate ID
      </button>
      <div>Unique ID: {uniqueId}</div>
      {/* Get Current Date */}
      <div>Current Date: {currentDate.toDateString()}</div>
      {/* Add logic to override date if needed */}
      {/* Date Override Input */}
      <div>Date Override</div>
      <div>
        <input type="date" name="date" id="date" className="text-black" />
      </div>
      {/* Duration of Task Input */}
      <div>
        <div>Duration of Task</div>
        <input
          type="text"
          onChange={(e) => setDuration(e.target.value)}
          className="text-black"
        />
      </div>
      {/* Submit Button */}
      <button onClick={AddTaskToDB} type="submit" className="border-2 p-1">
        Submit
      </button>
      {/* Display message */}
      {message && <div>{message}</div>}
    </div>
  );
};

export default AddTask;
