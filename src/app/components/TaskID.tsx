"use client";

import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { db } from "../../../firebase";

const TaskID = () => {
  const { data: session } = useSession();

  const newTaskID = async () => {
    const generateUniqueNumbers = () => {
      const num = Math.floor(Math.random() * 900000000 + 100000000);
      return num;
    };

    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "userEmail"),
      {
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
        taskID: generateUniqueNumbers(),
      }
    );
  };

  return <button onClick={newTaskID}>TaskID</button>;
};

export default TaskID;
