import Layout from "/componentes/Layout";
import Items from "/componentes/ItemsIndex";

//pagina principal del dashboard se hace uso del componente Items el cual representa cada uno de las opciones a mostrar en el dashboard

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
            titulo="Listado de Expedientes"
            path="./images/listar paciente.png"
            route="/gestion/listarExpedientes"
          />
          <Items
            titulo="Listado de Pacientes"
            path="./images/listar paciente.png"
            route="/gestion/listarPacientes"
          />
          <Items
            titulo="Proximamente"
            path=""
            route="#"
          />
         
        </div>
      </Layout>
    </>
  );
}
