import Layout from "/componentes/Layout";
import Link from "next/link";

export default function editarPerfil() {
  return (
    <div className="container bg-slate-900">
      <Layout title="Perfil | Vitfile">
        <h1 className="font-bold">Edita tu Perfil</h1>
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
        <form action="">
          <input type="text" name="" id="" className="border-2 rounded-md hover:border-cyan-500 focus-within:border-cyan-400" />
          <Link href="/perfil">
            <button
              type="submit"
              className="bg-cyan-600 border-2 hover:border-cyan-400 text-white p-1 rounded-md"
            >
              Guardar Cambios
            </button>
          </Link>
        </form>
      </Layout>
    </div>
  );
}
