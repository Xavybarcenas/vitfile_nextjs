import Layout from "/componentes/Layout";
import Link from "next/link";

export default function radiografias() {
  return (
    <>
      <Layout title="Listar Paciente">
        <div className="flex">
          <img
            src="/images/foto.jpg"
            alt=""
            className="w-24 h-24 border-2 border-solid border-slate-800 ml-[55px] mt-3"
          />
          <div className="ml-[5%] grid grid-cols-5">
            <div className="m-5">
              <h1 className="font-bold">Nombres y Apellidos</h1>
              <span>Byron Alexis Bárcenas Jarquín</span>
            </div>
            <div className="m-5">
              <h1 className="font-bold">Sexo</h1>
              <span>Masculino</span>
            </div>

            <div className="m-5">
              <h1 className="font-bold">Tipo Sangre</h1>
              <span>O+</span>
            </div>
            <div className="m-5">
              <h1 className="font-bold">Cedula Identidad</h1>
              <p>281-240399-1010T</p>
            </div>
            <div className="m-5">
              <h1 className="font-bold">N Expediente</h1>
              <p>5001</p>
            </div>
          </div>
        </div>

        <div className="flex ml-[20%] mt-[5%]">
          <img src="/images/radiografia.jpg" alt="" className="w-[400px] h-[350px] m-4"/>
          <img src="/images/radiografia.jpg" alt="" className="w-[400px] h-[350px] m-4"/>
          
          <Link
            href="/gestion/listarExpedientes"
            className="bg-cyan-800 text-white absolute p-2 text-center ml-[30%] mt-[35%]"
          >
            Aceptar
          </Link>
        </div>
      </Layout>
    </>
  );
}
