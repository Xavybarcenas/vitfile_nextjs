import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import React from "react";
import {
  ImHome,
  ImUserPlus,
  ImUserMinus,
  ImUserCheck,
  ImCog,
  ImList,
  ImExit,
} from "react-icons/im";

export default function itemsIndex({ titulo, path }) {
  return (
    <>
      <Disclosure>
        <div className="text-center items-center w-[180px] h-[100px] hover:border-sky-600 p-2 sm:w-[150px] sm:h-[120px] rounded-lg group cursor-pointer hover:shadow-lg m-2 border-solid border-2 border-gray-300 shadow-md">
          <img src={path} alt="" width="50px" height="50px" className="block m-auto " />
          <a className=" text-[18px] text-gray-900 group-hover:text-sky-600 font-bold">
            {titulo}
          </a>
        </div>
      </Disclosure>
    </>
  );
}

itemsIndex.defaultProps = {
  titulo: "nombre de la opcion",
};
