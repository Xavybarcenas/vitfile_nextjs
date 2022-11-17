import Layout from "/componentes/Layout";

export default function agregarPaciente() {
  return (
    <>
      <Layout title="Agregar Paciente | Vitfile">
        <h1 className="font-bold text-[22px] text-center my-3 font-titulos">
          Agrega un nuevo Paciente
        </h1>
        <div className=" border-2 w-[90%]  ml-[5%] shadow-xl">
          <div className="">
            <form action="" className="grid grid-cols-2 w-[80%] m-auto my-3">
              <div>
                <label htmlFor="fullname" className="font-formularios">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className="border-2 border-cyan-500 m-2 w-[50%] rounded-md"
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
                  className="border-2 border-cyan-500 m-2 w-[50%] rounded-md"
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
                  className="border-2 border-cyan-500 m-2 w-[50%] rounded-md"
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
                  className="border-2 border-cyan-500 m-2 w-[50%] rounded-md"
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
                  className="border-2 border-cyan-500 m-2 w-[50%] rounded-md"
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
                  className="border-2 border-cyan-500 m-2 w-[50%] rounded-md"
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
                  className="border-2 border-cyan-500 m-2 w-[50%] rounded-md"
                />
              </div>

              <div>
                <label htmlFor="departamento" className="font-formularios">
                  Departamento
                </label>
                <select
                  name="departamento"
                  id="departamento"
                  className="border-2 border-cyan-500 m-2 w-[25%] rounded-md"
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
                  className="border-2 border-cyan-500 m-2 w-[50%] rounded-md"
                />
              </div>
              <div>
                <label htmlFor="escolaridad" className="font-formularios">
                  Escolaridad
                </label>
                <select
                  name="escolaridad"
                  id="escolaridad"
                  className="border-2 border-cyan-500 m-2 w-[25%] rounded-md"
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
                  className="border-2 border-cyan-500 m-2 w-[50%] rounded-md"
                />
              </div>
              <div>
                <label htmlFor="estadocivil" className="font-formularios">
                  Estado Civil
                </label>
                <select
                  name="estadocivil"
                  id="estadocivil"
                  className="border-2 border-cyan-500 m-2 w-[25%] rounded-md"
                >
                  <option value="bachiller">Soltero(a)</option>
                  <option value="primariaterminada">Casada(a)</option>
                  <option value="profesional">Unión Libre</option>
                </select>
              </div>
              <div>
                <label htmlFor="foto" className="font-formularios">
                  Foto:
                </label>
                <input type="file" name="foto" id="foto" />
              </div>
            </form>
            <h1 className="text-center font-titulos font-bold text-[22px] my-8">
              Datos de Emergencia
            </h1>
            <form action="" className="grid grid-cols-2 ml-[10%]">
              <div>
                <label htmlFor="avisara" className="font-formularios">
                  En caso de emergencia avisar a:
                </label>

                <input
                  type="text"
                  name="avisara"
                  id="avisara"
                  className="border-2 border-cyan-500 m-2 w-[40%] rounded-md"
                />
              </div>
              <div>
                <label htmlFor="parentesco" className="font-formularios">
                  Parentesco:
                </label>

                <input
                  type="text"
                  name="parentesco"
                  id="parentesco"
                  className="border-2 border-cyan-500 m-2 w-[40%] rounded-md"
                />
              </div>
              <div>
                <label htmlFor="phoneparent" className="font-formularios">
                  Telefono:
                </label>

                <input
                  type="text"
                  name="phoneparent"
                  id="phoneparent"
                  className="border-2 border-cyan-500 m-2 w-[40%] rounded-md"
                />
              </div>
              <div>
                <label htmlFor="domicilio" className="font-formularios">
                  Domicilio:
                </label>

                <input
                  type="text"
                  name="domicilio"
                  id="domicilio"
                  className="border-2 border-cyan-500 m-2 w-[40%] rounded-md"
                />
              </div>
            </form>
            <button className="bg-cyan-500 border-2 border-cyan-400 text-white w-[100px] h-[50px] rounded-lg text-center items-center ml-[50%] mt-[10%] mb-5">
              Ingresar
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
}
