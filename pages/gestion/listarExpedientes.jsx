import Layout from "../../componentes/Layout";
import Tablaexpediente from "../../componentes/tablaexpediente"
export default function listarExpedientes({ result }) {
  let rendered = result.data.map((element) => {
    return (
      <Tablaexpediente
        key={element.id}
        value={element}
        
      />
    );
  });

  return (
    <>
      <Layout title="Listado Expedientes">
        {rendered}
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const URL = "http://localhost:1337/api/expedientes/";
  const response = await fetch(URL);
  const result = await response.json();

  return {
    props: {
      result,
    },
  };
}
