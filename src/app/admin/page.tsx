"use client";

import { useSession } from "next-auth/react";
import NewTask from "./NewTask";

const AdminPage = () => {
  const { data: session } = useSession();
  return (
    <div className="container mx-auto pt-12 text-white">
      <div className="pb-10 text-3xl">Admin Page</div>
      <div className="pb-24">Hello {session?.user?.name}</div>
      {/* Recent Task Entries for logged in User */}
      {/* Dropdown for Clients */}
      {/* Add Task Component */}
      {/* <NewTask /> */}
      {/* Add Client Component */}
    </div>
  );
};

export default AdminPage;
