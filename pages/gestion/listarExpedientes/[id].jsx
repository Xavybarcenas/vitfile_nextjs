import ExpedientePaciente from "../../../componentes/expedientePaciente";

export default function Paciente(expedientes) {
  return (
    <>
      <ExpedientePaciente 
      key = {expedientes.expediente.data.id}
      value = {expedientes.expediente.data.attributes}/>
    </>
  );
}
export async function getServerSideProps({ query: { id } }) {
  const URL = `http://localhost:1337/api/expedientes/${id}`;
  const response = await fetch(URL);
  const expediente = await response.json();
  console.log(expediente);
  return {
    props: { expediente },
  };
}
