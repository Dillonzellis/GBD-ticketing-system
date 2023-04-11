"use client";

import { collection, query } from "firebase/firestore";
import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import Button from "./components/Button";
import TaskID from "./components/TaskID";

const Home = () => {
  const { data: session } = useSession();

  // const [emailId] = useCollection(
  //   query(collection(db, "users", session?.user?.email!, "userEmail"))
  // );

  // const emailId = query(
  //   collection(db, "users", session?.user?.email!)
  // );

  // console.log(emailId);

  return (
    <main className="mx-auto mt-12 max-w-[600px] space-y-8 border p-4 text-white">
      <h1 className="text-2xl">Client Name</h1>

      <Button />
      <div className="flex flex-col">
        <label htmlFor="">Time</label>
        <input type="text" className="px-2 text-slate-700" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Desc</label>
        <textarea className="px-2 text-slate-700"></textarea>
      </div>
      <button className="border-2 p-4" type="submit">
        Submit
      </button>

      <div className="">
        <TaskID />
      </div>

      {/* {emailId?.docs.map((doc) => (
        <div key={doc.id}>email from db {doc.data.name}</div>
      ))} */}

      {/* {emailId?.docs[emailId?.docs.length - 1]?.data().text} */}

      {/* <div className="">{emailId!}</div> */}

      {session && (
        <div className="|">
          <p>Logged in as {session.user?.email}</p>{" "}
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      )}
    </main>
  );
};

export default Home;
