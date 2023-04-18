import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../firebase";

type Client = {
  clientName: string;
  projectNumber: string;
  monthlyHours: string;
};

const GetClients = () => {
  const [clientList, setClientList] = useState<Client[]>([]);

  const handleGetClients = async () => {
    const querySnapshot = await getDocs(collection(db, "clients"));

    const newClientList = querySnapshot.docs.map((doc) => doc.data() as Client);

    setClientList(newClientList);
  };

  return (
    <div>
      <button onClick={handleGetClients}>Get Clients</button>
      {clientList.map((client: Client, index: number) => (
        <div key={index}>
          <div>Client Name: {client.clientName}</div>
          <div>Project Number: {client.projectNumber}</div>
          <div>Monthly Hours: {client.monthlyHours}</div>
        </div>
      ))}
    </div>
  );
};

export default GetClients;
