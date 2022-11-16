import Layout from "/componentes/Layout";
import Items from "/componentes/itemsIndex";

export default function Home() {
  return (
    <>
      <Layout title="Dashboard">
        <h1 className="text-center font-bold text-[22px] my-2 justify-center">
          Bienvenido
        </h1>
        <div className="grid  lg:grid-cols-4 lg:grid-rows-3 sm:grid-cols-2 sm:grid-rows-3 ls:grid-cols-4 l:ml-6">
          <Items
            titulo="Agregar Pacientes"
            path="./images/Ingresar Paciente.png"
            route="/gestion/agregarPaciente"
          />
          <Items
            titulo="Ingresar Pacientes"
            path="./images/Ingresar Paciente.png"
            route="#"
          />
          <Items
            titulo="Historiales Médicos"
            path="./images/listar paciente.png"
            route="#"
          />
          <Items
            titulo="Eliminar Pacientes"
            path="#"
            route="#"
          />
          <Items
            titulo="Agregar Pacientes"
            path="./images/Ingresar Paciente.png"
            route="#"
          />
          <Items
            titulo="Eliminar Pacientes"
            path="./images/egresar Paciente.png"
            route="#"
          />
        </div>
      </Layout>
    </>
  );
}
