import Layout from "/componentes/Layout";
import Link from "next/link";

export default function Perfil() {
  return (
    <>
      <Layout title="Perfil | Vitfile">
        <h1 className="text-center font-semibold text-[22px]">
          Bienvenido a tu Perfil
        </h1>
        <div className="absolute justify-center items-center p-8 bg-white border-solid border-cyan-600 border-2 rounded-md  texet-center shadow-xl">
          <span className="flex justify-center font-bold">
            Detalles del Perfil
          </span>
          <div className="flex justify-center mt-5">
            <img
              src="/images/foto.jpg"
              className="rounded-full w-24 h-24"
              alt="Perfil"
            />
          </div>
          <div className="block text-center mb-8 p-1">
            <span>
              <span className="font-bold">Nombre: </span>
              Ing. Byron Bárcenas
            </span>
            <p>
              <span className="font-bold">Rol:</span>
              Administrador
            </p>
          </div>

          <div className="flex justify-center">
            <Link href="#">
              <a className="text-center bg-sky-500 text-white p-2 w-24 h-10 rounded-md border-2 hover:border-cyan-400 text-sm">
                Editar Perfil
              </a>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
