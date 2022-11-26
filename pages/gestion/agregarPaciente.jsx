import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { useState } from "react";
import CrearPaciente from "/componentes/crearPaciente";

export default function AgregarPaciente(data) {
  const [ListPacientes, setListPacientes] = useState([]);

  let newPaciente= (element) => {
    createPaciente(element).then((data) =>
      setListPacientes([...ListPacientes, data]),
      console.log(data)
    );
  };
  

  return (
    <CrearPaciente  fnAction={newPaciente} value={data}>
      
    </CrearPaciente>
  );
}

export const agregarnuevoPaciente = async (data) =>{
  const response = await fetch("http://localhost:1337/api/expedientes/", {
    method : "POST",
    body : JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  const datos = await response.json();
  console.log(response);
  console.log(datos);
  console.log(datos);
}
export async function createPaciente(data){
   const URL="http://localhost:1337/api/expedientes/"
  let response = await fetch(URL, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  });
  console.log(data);
  console.log(response);
  return await response.json();


}