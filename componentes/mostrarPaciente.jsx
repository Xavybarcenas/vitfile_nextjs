import Layout from "/componentes/Layout";
import Link from "next/link";
export default function mostrarPaciente(props) {
        let imagen;
    if(props.value.sexo === 'Masculino'){
        imagen = "hombre.png";
    }else{
        imagen = "mujer.png";
    }

  return (
    <>
      <Layout title="Listar Paciente">
        <div className="flex">
            
          <img
            src={`/images/${imagen}`}
            alt=""
            className="w-24 h-24 border-2 border-solid border-slate-800 ml-[55px] mt-3"
          />
          <div className="ml-[5%] grid grid-cols-5">
            <div className="m-5">
              <h1 className="font-bold">Nombres y Apellidos</h1>
              <span>{props.value.nombreCompleto}</span>
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
        <div className="grid grid-cols-2 m-auto ml-[25%] mt-[5%]">
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
          <p>{props.value.fechaNacimiento}</p>
          <h1 className="font-bold">Departamento:</h1>
          <p>{props.value.departamento}</p>
          <h1 className="font-bold">Municipio:</h1>
          <p>{props.value.municipio}</p>
          <h1 className="font-bold">Domicilio:</h1>
          <p>{props.value.domicilio}</p>
        </div>

        <h1 className="text-center font-titulos font-bold text-[22px] my-8">
                Datos de Emergencia
              </h1>
            <div className="grid grid-cols-2 ml-[25%]">
             
              <div>
                <label htmlFor="avisara" className="font-bold">
                  En caso de emergencia avisar a:
                </label>

               <span> {props.value.nombreEmergencia}</span>
              </div>
              <div>
                <label htmlFor="parentesco" className="font-bold">
                  Parentesco:
                </label>

               <span> {props.value.parentesco}</span>
              </div>
              <div>
                <label htmlFor="phoneparent" className="font-bold">
                  Telefono:
                </label>

             <span> {props.value.telefonoEmergencia}</span>
              </div>
              <div>
                <label htmlFor="domicilio" className="font-bold">
                  Domicilio:
                </label>

               <span> {props.value.domicilioEmergencia} </span>
              </div>
            </div>

        <div className="flex ml-[25%] mt-[5%]">
          <table className="table-fixed border-2 text-center border-solid">
            <thead className="border-2 p-2 border-slate-500 border-solid">
              <tr className="border-2 p-2 border-slate-500 border-solid">
                <th className="border-2 p-2 border-slate-500 border-solid">
                  Estado
                </th>
                <th className="border-2 p-2 border-slate-500 border-solid">
                  Establecimiento de Salud
                </th>
                <th className="border-2 p-2 border-slate-500 border-solid">
                  Piso
                </th>
                <th className="border-2 p-2 border-slate-500 border-solid">
                  Area
                </th>
                <th className="border-2 p-2 border-slate-500 border-solid">
                  Sala
                </th>
                <th className="border-2 p-2 border-slate-500 border-solid">
                  Cama
                </th>
                <th className="border-2 p-2 border-slate-500 border-solid">
                  Encargado(a)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-2 p-2 border-slate-500 border-solid text-lime-600 font-bold">
                  Ingresado(a)
                </td>
                <td className="border-2 p-2 border-slate-500 border-solid">
                  HEODRA
                </td>
                <td className="border-2 p-2 border-slate-500 border-solid">
                  3ro
                </td>
                <td className="border-2 p-2 border-slate-500 border-solid">
                  Cirugia
                </td>
                <td className="border-2 p-2 border-slate-500 border-solid">
                  2B
                </td>
                <td className="border-2 p-2 border-slate-500 border-solid">
                  B7
                </td>
                <td className="border-2 p-2 border-slate-500 border-solid">
                  Dra. Ana Juarez
                </td>
              </tr>
            </tbody>
          </table>
          
        </div>
        <Link href="/gestion/listarPacientes" className="bg-cyan-800 text-white absolute p-2 text-center ml-[50%] mt-[1%]">
            Aceptar
          </Link>
      </Layout>
    </>
  );
}
