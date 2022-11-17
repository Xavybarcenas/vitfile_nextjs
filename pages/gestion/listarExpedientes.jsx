import Layout from "../../componentes/Layout";
import Link from "next/link";
export default function listarExpedientes() {
  return (
    <>
      <Layout title="Listar Expedientes">
        <h1 className="font-bold text-[22px] text-center my-3 font-titulos">
          Listado de Expedientes
        </h1>
        <div className="w-[90%]  ml-[5%]">
          <div className="">
            <form className="flex w-[80%] m-auto">
              <div>
                <label htmlFor="nexpediente" className="font-formularios">
                  No Expediente
                </label>
                <input
                  type="text"
                  name="nexpediente"
                  id="nexpediente"
                  className="border-2 border-cyan-500 m-2 w-[50%] rounded-md"
                  value="00520"
                />
              </div>
              <div>
                <label htmlFor="fullname" className="font-formularios">
                  Nombres
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className="border-2 border-cyan-500 m-2 w-[50%] rounded-md"
                />
              </div>
              <div>
                <label htmlFor="cedula" className="font-formularios">
                  Cedula
                </label>
                <input
                  type="text"
                  name="cedula"
                  id="cedula"
                  className="border-2 border-cyan-500 m-2 w-[50%] rounded-md"
                />
                <button className="bg-cyan-600 text-white p-1 ml-5">
                  Buscar
                </button>
              </div>
            </form>

            <div className="flex ml-[25%] mt-[10%]">
              <table className="table-fixed border-2 text-center border-solid ">
                <thead className="border-1 p-2 border-slate-500 border-solid">
                  <tr className="border-1 p-2 border-slate-500 border-solid">
                    <th className="border-1 p-2 border-slate-500 border-solid">
                      No Expdiente
                    </th>
                    <th className="border-1 p-2 border-slate-500 border-solid">
                      Nombres y Apellidos
                    </th>
                    <th className="border-1 p-2 border-slate-500 border-solid">
                      Estado
                    </th>
                    <th className="border-1 p-2 border-slate-500 border-solid">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-2 p-2 ">005201</td>
                    <td className="border-2 p-2">ANA MARIA MONTALVAN LAGOS</td>
                    <td className="border-2 p-2 text-lime-600 font-bold">
                      INGRESADA
                    </td>
                    <td className="border-2 p-2 ">
                      <Link
                        href="/gestion/expedientePaciente"
                        className="bg-cyan-800 rounded-md p-1 text-white"
                      >
                        Detalles
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 p-2 ">005202</td>
                    <td className="border-2 p-2">JUAN CARLOS TORREZ REYES</td>
                    <td className="border-2 p-2 text-rose-600 font-bold">
                      INACTIVO
                    </td>
                    <td className="border-2 p-2 ">
                      <Link
                        href="#"
                        className="bg-cyan-800 rounded-md p-1 text-white"
                      >
                        Detalles
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
