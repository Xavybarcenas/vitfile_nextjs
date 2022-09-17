import Layout from '/components/Layout'
import styles from "/styles/dashboard/dashboard.module.css";
import { fetchAPI } from "/lib/api";

const Pacientes = ({expedientes}) => {
    return (
        <Layout>

            <h1>Pacientes</h1>
            <h1>Listado de Pacientes</h1>
            <div>
                <label>{expedientes.Nombre}</label>
            </div>

        </Layout>

    );
}

  
  export async function getStaticProps() {
    // Run API calls in parallel
    const [pacientes] = await Promise.all([
      fetchAPI("/expedientes" , {populate: ["Nombre","Apellido"]}),
      
    ]);
  
    return {
      props: {
        expedientes : expedientes.data
      }}  
    }

export default Pacientes;