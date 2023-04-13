import { collection, deleteDoc, doc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { db } from "../../../firebase";

type Props = {
  taskId: number;
};

const DeleteTask = ({ taskId }: Props) => {
  const { data: session } = useSession();

  const handleDelete = async () => {
    try {
      await deleteDoc(
        doc(db, "users", session?.user?.email!, "userEmail", taskId.toString())
      );
      console.log("Document successfully deleted!");
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  return <button onClick={handleDelete}>Delete Task</button>;
};

export default DeleteTask;
