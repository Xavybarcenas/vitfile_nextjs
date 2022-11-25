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
     <Layout title="Listado Pacientes">
        <div className="flex ml-3%]">
          <table class="min-w-full border-collapse block md:table">
            <thead class="block md:table-header-group">
              <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  N Expediente
                </th>
                <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Nombre Completo
                </th>
                <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Estado
                </th>
                <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Detalles
                </th>
              </tr>
            </thead>
           {rendered}
          </table>
        </div>
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
