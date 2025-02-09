"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Home() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/auth/login", credentials);

    if (res.status === 200) {
      router.push("/dashboard");
    }
  };

  return (
    <div className=" flex justify-center items-center h-screen ">
      <form onSubmit={handleSubmit} className="bg-slate-700 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setCredentials({
              ...credentials,
              email: e.target.value,
            })
          } className="mb-4 text-slate-950"
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) =>
            setCredentials({
              ...credentials,
              password: e.target.value,
            })
          } className="mb-4 text-slate-950"
        />
        <button>Ingresar</button>
      </form>
    </div>
  );
}

export default Home;