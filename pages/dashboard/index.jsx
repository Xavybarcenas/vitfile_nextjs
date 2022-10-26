import Layout from '/componentes/Layout';
import Items from "/componentes/itemsIndex";


export default function Home() {
  return (
    <div>
      <Layout title="Dashboard">
        <h1 className="text-center">Bienvenido Que deseas hacer?</h1>
          <div className='grid gap-4 grid-cols-4 grid-rows-3'>
          <Items titulo="Agregar Pacientes" path="./images/Ingresar Paciente.png"/>
          <Items titulo="Eliminar Pacientes" path="./images/egresar Paciente.png"/>
          <Items titulo="Agregar Pacientes" path="./images/Ingresar Paciente.png"/>
          <Items titulo="Eliminar Pacientes" path="./images/egresar Paciente.png"/>
          <Items titulo="Agregar Pacientes" path="./images/Ingresar Paciente.png"/>
          <Items titulo="Eliminar Pacientes" path="./images/egresar Paciente.png"/>
          <Items titulo="Agregar Pacientes" path="./images/Ingresar Paciente.png"/>
          <Items titulo="Eliminar Pacientes" path="./images/egresar Paciente.png"/>
          <Items titulo="Agregar Pacientes" path="./images/Ingresar Paciente.png"/>
          <Items titulo="Eliminar Pacientes" path="./images/egresar Paciente.png"/>
          <Items titulo="Agregar Pacientes" path="./images/Ingresar Paciente.png"/>
          <Items titulo="Eliminar Pacientes" path="./images/egresar Paciente.png"/>
          </div>
      </Layout>
    </div>
  );
}
