import Layout from "./Layout";
import { useState } from "react";

export default function crearPaciente(props) {
  const [nombreCompleto, setNombreCompleto] = useState(props.value ? props.value.nombreCompleto : "");
  const [cedula, setcedula] = useState(props.value ? props.value.cedula : "");
  const [edad, setedad] = useState(props.value ? props.value.edad : "");
  const [nexpediente, setnexpediente] = useState(props.value ? props.value.nexpediente : "");
  const [sexo, setsexo] = useState(props.value ? props.value.sexo : "");
  const [fechaNacimiento, setfechaNacimiento] = useState(props.value ? props.value.fechaNacimiento : "");
  const [telefono, setTelefono] = useState(props.value ? props.value.telefono : "");
  const [etnia, setetnia] = useState(props.value ? props.value.etnia : "");
  const [escolaridad, setescolaridad] = useState(props.value ? props.value.escolaridad : "");
  const [departamento, setdepartamento] = useState(props.value ? props.value.departamento : "");
  const [municipio, setmunicipio] = useState(props.value ? props.value.municipio: "");
  const [tipoSangre, settipoSangre] = useState(props.value ? props.value.tipoSangre : "");
  const [domicilio, setdomicilio] = useState(props.value ? props.value.domicilio : "");
  const [ocupacion, setocupacion] = useState(props.value ? props.value.ocupacion : "");

  
  function handledSubmit(e) {
    e.preventDefault();
    props.fnAction({
      nombreCompleto: nombreCompleto,
      cedula: cedula,
      edad: edad,
      nexpediente : nexpediente,
      sexo : sexo,
      fechaNacimiento : fechaNacimiento,
      ocupacion : ocupacion,
      telefono : telefono,
      etnia : etnia,
      escolaridad : escolaridad,
      departamento : departamento,
      municipio : municipio,
      domicilio : domicilio,
      tipoSangre : tipoSangre,
        ocupacion : ocupacion,  
      
    },
    );

   setNombreCompleto("");
   setedad("");
   setcedula("");
   setnexpediente("");
   setsexo("");
   setfechaNacimiento("");
   setTelefono("");
   setetnia("");
   setescolaridad("");
   setdepartamento("");
   setmunicipio("");
   setdomicilio("");
   settipoSangre("");
   setocupacion("");
  }

  return (
    <>
      <Layout title="Agregar Paciente | Vitfile">
        <h1 className="font-bold text-[22px] text-center my-3 font-titulos">
          Agrega un nuevo Paciente
        </h1>
        <div className=" border-2 w-[90%]  ml-[5%] shadow-xl">
          <div className="">
            <form
              action=""
              className="grid grid-cols-2 w-[80%] m-auto my-3"
              onSubmit={(e) => handledSubmit(e)}
            >
                
              <div>
                <label htmlFor="fullname" className="font-formularios">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className="border-b-slate-600 border-b-2 border-solid m-2 focus:outline-none focus:border-slate-600  bg-transparent "
                  value={nombreCompleto}
                  onChange={(e) => setNombreCompleto(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="age" className="font-formularios">
                  Edad
                </label>
                <input
                  type="text"
                  name="age"
                  id="age"
                  className="border-b-slate-600 border-b-2 border-solid m-2 focus:outline-none focus:border-slate-600  bg-transparent"
                  onChange={(e) => setedad(e.target.value)}
                  value={edad}
                />
              </div>

              <div>
                <label htmlFor="address" className="font-formularios">
                  Dirreccion
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="border-b-slate-600 border-b-2 border-solid m-2 focus:outline-none focus:border-slate-600  bg-transparent"
                  onChange={(e) => setdomicilio(e.target.value)}
                  value={domicilio}
                />
              </div>
              <div>
                <label htmlFor="tiposangre" className="font-formularios">
                  tipo de sangre
                </label>
                <input
                  type="text"
                  name="tiposangre"
                  id="tiposangre"
                  className="border-b-slate-600 border-b-2 border-solid m-2 focus:outline-none focus:border-slate-600  bg-transparent"
                  onChange={(e) => settipoSangre(e.target.value)}
                  value={tipoSangre}
                />
              </div>
              <div>
                <label htmlFor="cedula" className="font-formularios">
                  Cedula de identidad
                </label>
                <input
                  type="text"
                  name="cedula"
                  id="cedula"
                  className="border-b-slate-600 border-b-2 border-solid m-2 focus:outline-none focus:border-slate-600  bg-transparent"
                  onChange={(e) => setcedula(e.target.value)}
                  value={cedula}
                />
              </div>
              <div>
                <label htmlFor="phone" className="font-formularios">
                  Numero de telefono
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="border-b-slate-600 border-b-2 border-solid m-2 focus:outline-none focus:border-slate-600  bg-transparentd"
                  onChange={(e) => setTelefono(e.target.value)}
                  value={telefono}
                />
              </div>
              <div>
                <label htmlFor="etnia" className="font-formularios">
                  Etnia
                </label>
                <input
                  type="text"
                  name="etnia"
                  id="etnia"
                  className="border-b-slate-600 border-b-2 border-solid m-2 focus:outline-none focus:border-slate-600  bg-transparent"
                  onChange={(e) => setetnia(e.target.value)}
                  value={etnia}
                />
              </div>

              <div>
                <label htmlFor="departamento" className="font-formularios">
                  Departamento
                </label>
                <select
                  name="departamento"
                  id="departamento"
                  className="border-b-slate-600 border-b-2 border-solid m-2 focus:outline-none focus:border-slate-600  bg-transparent"
                  onChange={(e) => setdepartamento(e.target.value)}
                  value={departamento}
                >
                  <option value="Leon">Leon</option>
                  <option value="Chinandega">Chinandega</option>
                  <option value="Managua">Managua</option>
                </select>
              </div>
              <div>
                <label htmlFor="municipio" className="font-formularios">
                  Municipio
                </label>
                <input
                  type="text"
                  name="municipio"
                  id="municipio"
                  className="border-b-slate-600 border-b-2 border-solid m-2 focus:outline-none focus:border-slate-600  bg-transparent"
                  onChange={(e) => setmunicipio(e.target.value)}
                  value={municipio}
                />
              </div>
              <div>
                <label htmlFor="escolaridad" className="font-formularios">
                  Escolaridad
                </label>
                <select
                  name="escolaridad"
                  id="escolaridad"
                  className="border-b-slate-600 border-b-2 border-solid m-2 focus:outline-none focus:border-slate-600  bg-transparent"
                  onChange={(e) => setescolaridad(e.target.value)}
                  value={escolaridad}
                >
                  <option value="bachiller">Bachiller</option>
                  <option value="primariaterminada">Primaria Terminada</option>
                  <option value="profesional">Profesional</option>
                </select>
              </div>
              <div>
                <label htmlFor="ocupacion" className="font-formularios">
                  Ocupación
                </label>
                <input
                  type="text"
                  name="ocupacion"
                  id="ocupacion"
                  className="border-b-slate-600 border-b-2 border-solid m-2 focus:outline-none focus:border-slate-600  bg-transparent"
                  onChange={(e) => setocupacion(e.target.value)}
                  value={ocupacion}
                />
              </div>
             
              
              <button
                className="bg-cyan-500 border-2 border-cyan-400 text-white w-[100px] h-[50px] rounded-lg text-center items-center ml-[50%] mt-[10%] mb-5"
                type="submit"
                value="save"
              >
                Ingresar
              </button>
              
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}
