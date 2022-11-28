import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-[#243b55] text-white">
      <section className="flex w-[30rem] flex-col space-y-10">
        <div class="text-center text-4xl font-medium">
          Vitfile | Inicia Sesión
        </div>

        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type="text"
            placeholder="Ingresa tu Usuario"
            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
          />
        </div>

        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type="password"
            placeholder="Ingresa Tu Contraseña"
            class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
          />
        </div>

        <Link
          href="/dashboard"
          className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400 text-center"
        >
          INICIA SESION
        </Link>

        <a
          href="#"
          className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
        >
          HAS OLVIDADO TU CONTRASEÑA?
        </a>
        <Link href="/landingPage" className=" text-cyan-300 text-center">
          <h1>Visita nuestro Landing Page!!</h1>
        </Link>
      </section>
    </main>
  );
}
