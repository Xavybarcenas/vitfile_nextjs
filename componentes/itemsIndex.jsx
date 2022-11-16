import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import React from "react";

export default function itemsIndex({ titulo, path, route }) {
  return (
    <>
      <Disclosure>
        <Link href={route}>
          <div className="text-center items-center w-[180px] h-[100px] hover:border-sky-600 p-2 sm:w-[150px] sm:h-[120px] rounded-lg group cursor-pointer hover:shadow-lg m-2 border-solid border-2 border-gray-300 shadow-md">
            <img
              src={path}
              alt=""
              width="50px"
              height="50px"
              className="block m-auto "
            />
            <span
              className=" text-[16px] text-gray-900 group-hover:text-sky-600 font-bold"
              
            >
              {titulo}
            </span>
          </div>
        </Link>
      </Disclosure>
    </>
  );
}

itemsIndex.defaultProps = {
  titulo: "nombre de la opcion",
};
