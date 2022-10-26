import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    < >
      <Head>
        <title>Bienvenido</title>
        <meta name="description" content="Inicia Sesion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex bg-[#243b55] w-screen h-screen">
        <div className="absolute bg-[#00000080] top-[40%] left-[50%] w-[400px] h-[44px] -translate-x-1/2 -translate-y-1/2 box-border shadow-xl rounded-xl p-10">
          <div className="">
            <div className="{styles.container}">
              <span className="text-white">Iniciar</span>
              <span className="text-white">Sesión</span>
            </div>
            <div className="{styles.barra}"></div>
            <div className="w-14 h-14">
              <img
                src={"/images/logo_login.png"}
                
                alt="logo_login"
              />
            </div>
            <form>
              <div className="text-white relative w-full p-3 mb-8 border-none border-">
                <input type="text" name="username" required="" />
                <label>Usuario</label>
              </div>
              <div className="text-white ">
                <input type="password" name="password" required="" />
                <label>Contraseña</label>
              </div>
              <Link href="/dashboard">
                <a>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Ingresar
                </a>
              </Link>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
