import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";

type Client = {
  clientName: string;
  projectNumber: string;
  monthlyHours: string;
};

const GetClients = () => {
  const [clientList, setClientList] = useState<Client[]>([]);

  const [selectedClientId, setSelectedClientId] = useState<string | null>(null);

  useEffect(() => {
    const fetchClients = async () => {
      const querySnapshot = await getDocs(collection(db, "clients"));
      const newClientList = querySnapshot.docs.map(
        (doc) => doc.data() as Client
      );
      setClientList(newClientList);
    };

    fetchClients();
  }, []);

  const handleGetClients = async () => {
    const querySnapshot = await getDocs(collection(db, "clients"));
    const newClientList = querySnapshot.docs.map((doc) => doc.data() as Client);
    setClientList(newClientList);
  };

  const handleSelectClient = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedClientId(event.target.value);
  };

  return (
    <div>
      <button onClick={handleGetClients}>Get Clients</button>
      <div>
        <select className="text-black" onChange={handleSelectClient}>
          <option>Select a client</option>
          {clientList.map((client: Client, index: number) => (
            <option key={index} value={client.clientName}>
              {client.clientName}
            </option>
          ))}
        </select>
      </div>
      {selectedClientId && <div>Selected client ID: {selectedClientId}</div>}
    </div>
  );
};

export default GetClients;
