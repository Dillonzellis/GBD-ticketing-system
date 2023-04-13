import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { db } from "../../../firebase";

type Props = {
  taskId: number;
  getTaskIDs: () => Promise<void>;
};

const DeleteTask = ({ taskId, getTaskIDs }: Props) => {
  const { data: session } = useSession();

  const handleDelete = async () => {
    try {
      await deleteDoc(
        doc(db, "users", session?.user?.email!, "userEmail", taskId.toString())
      );
      console.log("Document successfully deleted!");
      getTaskIDs(); // Call getTaskIDs after task is deleted
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  return (
    <div className="">
      <button onClick={handleDelete}>Delete Task</button>
    </div>
  );
};

const GetTaskList = () => {
  const { data: session } = useSession();
  const [taskIDs, setTaskIDs] = useState<number[]>([]);

  const getTaskIDs = async () => {
    const q = query(
      collection(db, "users", session?.user?.email!, "userEmail"),
      where("userId", "==", session?.user?.email!)
    );
    const querySnapshot = await getDocs(q);
    const newTaskIDs = querySnapshot.docs.map((doc) => doc.data().taskID);
    setTaskIDs(newTaskIDs);
  };

  return (
    <div>
      <button onClick={getTaskIDs}>Get Task IDs</button>
      <div className="">
        {taskIDs.map((taskID) => (
          <div className="flex gap-4" key={taskID}>
            <div>{taskID}</div>
            <DeleteTask taskId={taskID} getTaskIDs={getTaskIDs} />{" "}
            {/* Pass down getTaskIDs as a prop */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetTaskList;
