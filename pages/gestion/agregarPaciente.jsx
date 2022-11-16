import Layout from "/componentes/Layout";

export default function agregarPaciente() {
  return (
    <>
      <Layout title="Agregar Paciente | Vitfile">
        <h1 className="font-bold text-[22px] text-center">
          Agrega un nuevo Paciente
        </h1>
        <div className=" border-2 border-cyan-600 w-[80%] h-1/2  ml-[10%]">
          <div className="">
          <form action="grid grid-cols-3" className="block p-2">
            <label htmlFor="fullname">Nombre completo</label>
            <input type="text" name="fullname" id="fullname" className="border-2 border-cyan-500 m-2 w-[25%] rounded-md"/>
            <label htmlFor="age">Edad</label>
            <input type="text" name="age" id="age" className="border-2 border-cyan-500 m-2 w-[25%] rounded-md"/>
            <label htmlFor="address">Dirreccion</label>
            <input type="text" name="address" id="address" className="border-2 border-cyan-500 m-2 w-[25%] rounded-md"/>
            <br />
            <label htmlFor="tiposangre">tipo de sangre</label>
            <input type="text" name="tiposangre" id="tiposangre" className="border-2 border-cyan-500 m-2 w-[25%] rounded-md"/>
            <label htmlFor="cedula">Cedula de identidad</label>
            <input type="text" name="cedula" id="cedula"  className="border-2 border-cyan-500 m-2 w-[25%] rounded-md" />
            <label htmlFor="departamento">Departamento</label>
            <select name="departamento" id="departamento" className="border-2 border-cyan-500 m-2 w-[15%] rounded-md">
              <option value="Leon">Leon</option>
              <option value="Chinandega">Chinandega</option>
              <option value="Managua">Managua</option>
            </select>
            <br />
            <button className="bg-cyan-500 border-2 border-cyan-400 text-white" >Ingresar</button>
          </form>
          </div>
        </div>
      </Layout>
    </>
  );
}
