import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();

    console.log("Received data:", { username, email, password });

    // Simulación de guardado en base de datos
    const newUser = { username, email, password }; // Aquí deberías insertar en tu DB

    return NextResponse.json({ success: true, user: newUser });
  } catch (error) {
    console.error("Error in register API:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
