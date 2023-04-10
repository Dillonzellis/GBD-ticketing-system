"use client";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { db } from "../../../firebase";

const TaskID = () => {
  const { data: session } = useSession();

  const newTaskID = async () => {
    const doc = await addDoc(collection(db, "tasks"), {
      userId: session?.user?.email!,
      createdAt: serverTimestamp(),
    });
  };

  return <div onClick={newTaskID}>TaskID</div>;
};

export default TaskID;
