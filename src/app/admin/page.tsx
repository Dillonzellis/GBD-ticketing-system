"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { AddClient } from "./AddClient";
import GetClients from "./GetClients";
import NewTask from "./NewTask";

const AdminPage = () => {
  const { data: session } = useSession();

  const [showAddClient, setShowAddClient] = useState(false);

  const [showGetClients, setShowGetClients] = useState(false);

  const handleAddClientClick = () => {
    setShowAddClient(!showAddClient);
  };

  const handleGetClientClick = () => {
    setShowGetClients(!showGetClients);
  };

  return (
    <div className="container mx-auto pt-12 text-white">
      <div className="pb-10 text-3xl">Admin Page</div>
      <div className="pb-24">Hello {session?.user?.name}</div>
      {/* Recent Task Entries for logged in User */}
      {/* Dropdown for Clients */}
      <div className="space-x-12">
        <button onClick={handleGetClientClick}> {showGetClients ? "Hide Clients" : "Show Clients"}</button>
        {showGetClients && <GetClients />}
        {/* Add Client Component */}
        <button onClick={handleAddClientClick}>{showAddClient ? "Hide Form" : "Add Client"}</button>
        {showAddClient && <AddClient />}
      </div>
      {/* Add Task Component */}
      {/* <NewTask /> */}
    </div>
  );
};

export default AdminPage;
