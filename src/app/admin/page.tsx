"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { AddClient } from "./AddClient";
import GetClients from "./GetClients";
import { NewTask } from "./NewTask";

const AdminPage = () => {
  const { data: session } = useSession();

  const [showAddClient, setShowAddClient] = useState(false);
  const [showGetClients, setShowGetClients] = useState(false);
  const [selectedClientId, setSelectedClientId] = useState<string>("");

  const handleAddClientClick = () => {
    setShowAddClient(!showAddClient);
  };

  const handleGetClientClick = () => {
    setShowGetClients(!showGetClients);
  };

  const handleClientSelect = (clientId: string | null) => {
    setSelectedClientId(clientId ?? "");
  };

  return (
    <div className="container mx-auto pt-12 text-white">
      <div className="pb-10 text-3xl">Admin Page</div>
      <div className="pb-24">Hello {session?.user?.name}</div>
      {/* Recent Task Entries for logged in User */}
      {/* Dropdown for Clients */}
      <div className="space-y-12">
        {/* Get Clients Component */}
        <GetClients
          selectedClientId={selectedClientId}
          onClientSelect={handleClientSelect}
        />
        <button onClick={handleAddClientClick}>
          {showAddClient ? "Hide Form" : "Add Client"}
        </button>
        {showAddClient && <AddClient />}
        {selectedClientId && <NewTask selectedClientId={selectedClientId} />}
      </div>
    </div>
  );
};

export default AdminPage;
