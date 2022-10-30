import Layout from "/componentes/Layout";
import Items from "/componentes/itemsIndex";

export default function Home() {
  return (
    <>
      <Layout title="Dashboard">
       
          <h1 className="text-center font-semibold text-[22px] mb-5">Bienvenido</h1>
          <div className="grid lg:gap-1 lg:grid-cols-4 lg:grid-rows-3 sm:grid-cols-2 sm:grid-rows-3 ls:grid-cols-4 l:ml-6">
            <Items
              titulo="Agregar Pacientes"
              path="./images/Ingresar Paciente.png"
            />
            <Items
              titulo="Eliminar Pacientes"
              path="./images/egresar Paciente.png"
            />
            <Items
              titulo="Agregar Pacientes"
              path="./images/Ingresar Paciente.png"
            />
            <Items
              titulo="Eliminar Pacientes"
              path="./images/egresar Paciente.png"
            />
            <Items
              titulo="Agregar Pacientes"
              path="./images/Ingresar Paciente.png"
            />
            <Items
              titulo="Eliminar Pacientes"
              path="./images/egresar Paciente.png"
            />

           
          </div>
      
      </Layout>
    </>
  );
}
