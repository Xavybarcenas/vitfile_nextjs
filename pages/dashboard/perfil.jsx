import Layout from "/componentes/Layout";
import Link from "next/link";

export default function Perfil() {
  return (
    <>
      <Layout title="Perfil | Vitfile">
        <div >
          <h1 className="">Perfil</h1>
          <h1>Detalles del Perfil</h1>
          <img
            src="/images/foto.jpg"
            className=""
            alt="Perfil"
          ></img>

          <label className="" id="nombre">
            <b>Nombre:</b> Ing. Byron Bárcenas
          </label>
          <label className="">
            <b>Rol:</b> Administrador
          </label>
          <Link href="#">
            <a className="">Modifical Perfil</a>
          </Link>
        </div>
      </Layout>
    </>
  );
}
