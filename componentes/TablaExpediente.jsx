import Link from "next/link";

export default function tablaExpediente(props) {
  return (
    <>
      <div className="flex ml-[10%]">
        <table>
          <tbody>
            <tr>
              <td className="border-2 p-2 ">{props.value.attributes.nexpediente}</td>
              <td className="border-2 p-2">{props.value.attributes.nombreCompleto}</td>
              {console.log(props.value.id)}
              <td className="border-2 p-2 text-lime-600 font-bold">
                INGRESADA
              </td>
              <td className="border-2 p-2 ">
                <Link
                  href={`/gestion/listarExpedientes/${props.value.id}`}
                  className="bg-cyan-800 rounded-md p-1 text-white"
                >
                  Detalles
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
