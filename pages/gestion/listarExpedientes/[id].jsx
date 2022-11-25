import { useEffect, useState } from "react";
import { getDataByID } from "../../../services/vitfileService";
import ExpedientePaciente from "../../../componentes/expedientePaciente";
import { useRouter } from "next/router";

export default function Paciente() {
  const  router  = useRouter();
  let [currentPaciente, setCurrentPaciente] = useState(null);
 

  useEffect(() => {
    getDataByID(router.query).then((data) => {
      setCurrentPaciente(data);
      console.log(router);
    });
  }, []);

  
  return (
    <>
      {currentPaciente && (
        <ExpedientePaciente
          
          value={currentPaciente}
        />
      )}
    </>
  );
}
export async function getServerSideProps({query : {id}}){
  const URL = `http://localhost:1337/api/expedientes/${id}`;
    let response = await fetch(`${URL}/${id}`);
    const expediente = await response.json
    console.log(expediente);
   return {
    props:{
      
    }
   }
}