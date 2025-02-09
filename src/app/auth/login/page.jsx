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
    <div className=" h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={handleSubmit} className=" w-1/4 bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <h1 className="text-slate-200 font-bold text-4xl mb-4">Iniciar sesión</h1>
        <label htmlFor="email" className="text-slate-200 mb-2 block text-sm">
          Email:
        </label>
        <input
          type="email"
          placeholder="ejemplo@gmail.com"
          onChange={(e) =>
            setCredentials({
              ...credentials,
              email: e.target.value,
            })
          } className="mb-4 text-slate-950"
        />
        <label htmlFor="password" className="text-slate-200 mb-2 block text-sm">
          Contraseña:
        </label>
        <input
          type="password"
          placeholder="Ejemplo123"
          onChange={(e) =>
            setCredentials({
              ...credentials,
              password: e.target.value,
            })
          } className="mb-4 text-slate-950"
        />
        <button className=" bg-blue-500 text-white p-3 rounded-lg mt-2 ">Ingresar</button>
      </form>
    </div>
  );
}

export default Home;