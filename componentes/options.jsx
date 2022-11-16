import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
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

export default function options() {
  return (
    <div className="block">
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-[2px] right-1 inline-flex items-center peer justify-center rounded-md p-[2px] text-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group hover:bg-gray-none">
          <GiHamburgerMenu
            className="block lg:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>

        <div className="p-6 w-1/2 ls:w-1/2 sm:w-[75%] sm:h-full h-screen  bg-sky-600 z-20 fixed top-0 -left-full lg:w-60 lg:left-0 peer-focus:left-0 peer-transition ease-out delay-150 duration-200 ">
          <div>
            <h1 className="text-base text-center cursos-pointer font-bold text-white borde-b border-gray-100 pb-4 w-full">
              Bienvenido a Vitfile
            </h1>
            <div className="my-1 border-b border-gray-100 pb-4">
              <Link href="/perfil">
                <img
                  src="../images/foto.jpg"
                  className="rounded-full w-20 h-20 ml-[35%] ls:ml-[30%] mb-2"
                />
              </Link>
              <Link href="/perfil">
                <div className="flex mb-2  justify-center items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <h3 className="text-base text-gray-100 group-hover:text-white font-semibold">
                    Perfil
                  </h3>
                </div>
              </Link>
              <Link href="/dashboard">
                <div className="flex mb-2  justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <ImUserPlus className="text-2x1 text-gray-100 group-hover:text-white" />
                  <h3 className="text-base text-gray-100 group-hover:text-white font-semibold">
                    Inicio
                  </h3>
                </div>
              </Link>
              <div className="flex mb-2  justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <ImUserPlus className="text-2x1 text-gray-100 group-hover:text-white" />
                <h3 className="text-base text-gray-100 group-hover:text-white font-semibold">
                  Agregar Usuario
                </h3>
              </div>
            </div>
            <div className="my-4 border-b border-gray-100 pb-4">
              <div className="flex mb-2  justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <ImCog className="text-2x1 text-gray-100 group-hover:text-white" />
                <h3 className="text-base text-gray-100 group-hover:text-white font-semibold">
                  Configuración
                </h3>
              </div>
              <div className="flex mb-2  justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <ImList className="text-2x1 text-gray-100 group-hover:text-white" />
                <h3 className="text-base text-gray-100 group-hover:text-white font-semibold">
                  Más
                </h3>
              </div>
            </div>
            <div className="my-4 ">
              <Link href="/">
                <div className="flex mb-2  justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <ImExit className="text-2x1 text-gray-100 group-hover:text-white" />
                  <span className="text-base text-gray-100 group-hover:text-white font-semibold">
                    Cerrar Sesión
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}
