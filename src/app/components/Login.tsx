"use client";

import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <div className="space-y-8">
        <h1 className="text-3xl">Login Screen</h1>
        <button onClick={() => signIn("google")}>Sign in big dawgie</button> 
      </div>
    </div>
  );
}

export default Login;
