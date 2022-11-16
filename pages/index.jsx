import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bienvenido</title>
        <meta name="description" content="Inicia Sesion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-[#243b55] w-screen h-screen">
        <div className="absolute bg-[#00000080] top-[50%] left-[50%] w-1/4 h-1/2 sm:w-[90%] sm:h-[80%] ls:w-[50%] ls:h-1/2 l:w-[80%] l:h-[60%] hd:w-[25%] hd:h-[60%] -translate-x-1/2 -translate-y-1/2 box-border shadow-xl rounded-xl p-10 ">
          <div className="text-center mb-2">
            <span className="text-white m-1 font-semibold text-2xl">
              Iniciar
            </span>
            <span className="text-white m-1 font-semibold text-2xl">
              Sesión
            </span>
          </div>
          <img
            src={"/images/logo_login.png"}
            alt="logo_login"
            className="w-14 h-14 absolute left-[43%] sm:left-[40%]"
          />
          <form className="mt-[20%] sm:mt-28 hd:mt-[30%] ls:mt-16">
            <div className="text-white  p-1  ">
              <input
                type="text"
                name="username"
                required=""
                className="mb-2 focus:outline-none border-b-2 focus:border-white  w-full  bg-transparent"
              />
              <label>Usuario</label>
            </div>
            <div className="text-white p-1 ">
              <input
                type="password"
                name="password"
                required
                className="border-b-white border-b-2 border-solid mb-2 focus:outline-none focus:border-white  w-full bg-transparent "
              />
              <label>Contraseña</label>
            </div>
            <Link
              href="/dashboard"
              className="p-3 text-white bg-sky-500 rounded-lg mt-9 absolute hd:mt-[15%] sm:mt-12 hover:border-white hover:border-solid hover:border-2 hover:bg-transparent"
            >
              Acceder
            </Link>
          </form>
        </div>
      </main>
    </>
  );
}
