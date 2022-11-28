import Link from "next/link";
import FechaHora from "./horafecha";

export default function nav() {
  return (
    <>
      <div class="shadow bg-cyan-900">
        <div class="h-10 mx-auto px-5 flex items-center justify-between">
          <a class="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">
            Logo
          </a>

          <ul class="flex items-center gap-5">
            <li className=" transition-colors text-white">
              <FechaHora />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
