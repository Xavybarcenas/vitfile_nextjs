const URL = `http://localhost:1337/api/expedientes`;

export async function getDataByID(id){
    let response = await fetch(`${URL}/${id}`);
    
   return response.json();
}

