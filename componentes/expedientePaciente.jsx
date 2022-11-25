import Layout from "/componentes/Layout";
import Link from "next/link";



export default function expedientePaciente(props) {
  console.log(props);
  return (
    <>
      <Layout title="Informacion Paciente">
        <div className="flex">
          <img
            src="https://res.cloudinary.com/deglifvrb/image/upload/v1669357402/foto_f78dfa3c98.jpg"
            alt=""
            className="w-24 h-24 border-2 border-solid border-slate-800 ml-[80px] mt-3"
          />
          <div className="ml-[5%] grid grid-cols-5">
            <div className="m-5">
              <h1 className="font-bold">Nombres y Apellidos</h1>
              <span></span>
              
             {props.value.nombreCompleto}
            </div>
            <div className="m-5">
              <h1 className="font-bold">Sexo</h1>
              <span >{props.value.sexo}</span>
            </div>

            <div className="m-5">
              <h1 className="font-bold">Tipo Sangre</h1>
              <span>{props.value.tipoSangre}</span>
            </div>
            <div className="m-5">
              <h1 className="font-bold">Cedula Identidad</h1>
              <p>{props.value.cedula}</p>
            </div>
            <div className="m-5">
              <h1 className="font-bold">N Expediente</h1>
              <p>{props.value.nexpediente}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 m-auto ml-[10%] mt-[5%]">
          <h1 className="font-bold">Fecha Nacimiento:</h1>
          <p>{props.value.fechaNacimiento}</p>
          <h1 className="font-bold">Ocupación:</h1>
          <p>{props.value.ocupacion}</p>
          <h1 className="font-bold">Telefono:</h1>
          <p>{props.value.telefono}</p>
          <h1 className="font-bold">Etnia:</h1>
          <p>{props.value.etnia}</p>
          <h1 className="font-bold">edad:</h1>
          <p>{props.value.edad}</p>
          <h1 className="font-bold">Escolaridad:</h1>
          <p>{props.value.escolaridad}</p>
          <h1 className="font-bold">Departamento:</h1>
          <p>{props.value.departamento}</p>
          <h1 className="font-bold">Municipio:</h1>
          <p>{props.value.municipio}</p>
          <h1 className="font-bold">Domicilio:</h1>
          <p>{props.value.Domicilio}</p>
        </div>

       

        <div className="flex ml-[20%] mt-[5%]">
          <table className="table-fixed border-2 text-center border-solid">
         
            <tbody>
              <tr>
                <td className="border-2 p-2 border-slate-500 border-soli text-slate-900 font-bold">
                  15/10/2022 - 8:25AM
                </td>
                <td className="border-2 p-2 border-slate-500 border-solid">
                  Atencion de Emergencia
                </td>
                <td className="border-2 p-2 border-slate-500 border-solid">
                  HEODRA
                </td>
                <td className="border-2 p-2 border-slate-500 border-solid">
                  Dr. Valeria Fonseca
                </td>
                <td className="border-2 p-2 border-slate-500 border-solid">
                  <button className="bg-cyan-600 text-white rounded-lg p-1">Detalles</button>
                </td>
               
              </tr>
              <tr>
                <td className="border-2 p-2 border-slate-500 border-soli text-slate-900 font-bold">
                  15/10/2022 - 10:15AM
                </td>
                <td className="border-2 p-2 border-slate-500 border-solid">
                  Seguimiento de Emergencia
                </td>
                <td className="border-2 p-2 border-slate-500 border-solid">
                  HEODRA
                </td>
                <td className="border-2 p-2 border-slate-500 border-solid">
                  Dr. Carlos Rostran
                </td>
                <td className="border-2 p-2 border-slate-500 border-solid">
                  <button className="bg-cyan-600 text-white rounded-lg p-1">Detalles</button>
                </td>
               
              </tr>
              <tr>
                <td className="border-2 p-2 border-slate-500 border-soli text-slate-900 font-bold">
                  16/10/2022 - 7:05AM
                </td>
                <td className="border-2 p-2 border-slate-500 border-solid">
                  Atencion de Emergencia
                </td>
                <td className="border-2 p-2 border-slate-500 border-solid">
                  HEODRA
                </td>
                <td className="border-2 p-2 border-slate-500 border-solid">
                  Dr. Valeria Fonseca
                </td>
                <td className="border-2 p-2 border-slate-500 border-solid">
                  <button className="bg-cyan-600 text-white rounded-lg p-1">Detalles</button>
                </td>
               
              </tr>
              <tr>
                <td className="border-2 p-2 border-slate-500 border-soli text-slate-900 font-bold">
                  16/10/2022 - 7:35AM
                </td>
                <td className="border-2 p-2 border-slate-500 border-solid">
                  Radiografias
                </td>
                <td className="border-2 p-2 border-slate-500 border-solid">
                  HEODRA
                </td>
                <td className="border-2 p-2 border-slate-500 border-solid">
                  Dr. Valeria Fonseca
                </td>
                <td className="border-2 p-2 border-slate-500 border-solid">
                  <Link href="/gestion/radiografias" className="bg-cyan-600 text-white rounded-lg p-1">Detalles</Link>
                </td>
               
              </tr>
            </tbody>
          </table>
          <Link href="/gestion/listarExpedientes" className="bg-cyan-800 text-white absolute p-2 text-center ml-[25%] mt-[17%]">
            Aceptar
          </Link>
        </div>
      </Layout>
    </>
  );


}
