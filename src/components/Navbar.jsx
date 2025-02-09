import Link from "next/link";


function Navbar() {

  return (
    <nav className="flex justify-between items-center bg-gray-950 text-white px-24 py-3">
      <h1 className="text-xl font-bold">NextAuth</h1>

      <ul className="flex gap-x-2">
          <>
            <li>
              <Link href="/">Bienvenido</Link>
            </li>
            <li>
              <Link href="/auth/login">Iniciar sesión</Link>
            </li>
            <li>
              <Link href="/auth/register">Registrarte</Link>
            </li>
          </>
          <>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </>
      </ul>
    </nav>
  );
}

export default Navbar;