"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Dashboard() {
  const [user, setUser] = useState({
    email: "",
    username: "",
  });
  const router = useRouter();

  const getProfile = async () => {
    const profile = await axios.get("/api/profile");
    setUser(profile.data);
  };

  const logout = async () => {
    try {
      const res = await axios.get("/api/auth/logout");
      console.log(res);
    } catch (error) {
      console.error(error.message);
    }
    router.push("/auth/login");
  };
  return (
    <div className=" flex justify-center items-center h-screen flex-col">
      <h1>Dashboard</h1>
      {JSON.stringify(user)}
      <button onClick={() => getProfile()}> Get Profile</button>
      <button onClick={() => logout()} className="bg-blue-500 text-slate-200 ">Salir</button>
    </div>
  );
}

export default Dashboard;