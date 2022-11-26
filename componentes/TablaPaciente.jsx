import Link from "next/link";

export default function tablaPaciente(props) {
  console.log(props.value);
  return (
    <tbody class="block md:table-row-group">
      <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
          <span className="inline-block w-1/3 md:hidden font-bold">
            Expediente
          </span>
          <b>{props.value.attributes.nexpediente}</b>
        </td>
        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
          <span class="inline-block w-1/3 md:hidden font-bold">
            Nombre Completo
          </span>
          {props.value.attributes.nombreCompleto}
        </td>
        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell text-lime-600">
          <span class="inline-block w-1/3 md:hidden font-bold">Estado</span>
          <span className="text-lime-600">Activo</span>
        </td>

        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
          <span class="inline-block w-[5%] md:hidden font-bold">Actions</span>
          <Link
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border border-blue-500 rounded "
            href={`/gestion/listarPacientes/${props.value.id}`}
          >
            Detalles
          </Link>
        </td>
      </tr>
    </tbody>
  );
}
