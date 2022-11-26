import Link from "next/link";
export default function LandingPage() {
  return (
    <main class="profile-page">
      <section class="relative py-1 bg-[#353a45] text-white">
        <div class="container mx-auto px-4">
          <div class="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-xl rounded-lg mt-1">
            <div class="px-6 md:p-0">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div class="relative">
                    <img
                      alt="..."
                      src="/images/facebook.png"
                      class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-54 max-w-150-px"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div class="py-6 px-3 mt-32 sm:mt-0">
                    <Link
                      href="/"
                      class="bg-cyan-600 active:bg-cyan-800 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                    >
                      Ir al sistema
                    </Link>
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                  <div class="flex justify-center py-4 lg:pt-4 pt-8">
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600 ml-3">
                        <img
                          src="/images/facebook.png"
                          alt=""
                          className="w-8 "
                        />
                      </span>
                      <span class="text-sm text-blueGray-400">Facebook</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                    <Link href="https://www.instagram.com/technosource2.0/">
                      <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600 ml-3">
                       
                       
                        <img
                          src="/images/instagram.png"
                          alt=""
                          className="w-8"
                        />
                      </span>
                      <span class="text-sm text-blueGray-400">Instagram</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-5 ">
                <h3 class="text-[70px] font-bold leading-normal text-blueGray-700 mb-2 md:text-[50px]">
                  TechnoSource
                </h3>
                <div class="text-lg leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <i class="fas fa-map-marker-alt mr-2 text-blueGray-400"></i>
                  Presenta:
                </div>
                <div class="mb-2 text-blueGray-600 mt-0">
                  

                  <img src="./images/logoDegradado.png" className="w-64 ml-[42%] md:m-auto" alt="" />
                </div>
                <div class="mb-2 text-blueGray-600">
                  <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                  <div className="grid grid-cols-2 gap-24 md:gap-2 md:w-full w-[50%] justify-center ml-[25%] md:m-auto  text-white p-5">
                  <p className="text-left bg-cyan-500 p-2 rounded-md md:text-left">
                   <b>Misión:</b>  Ofrecer un sistema de expediente llamado VitFile,
                    dirigido a las unidades de salud (hospitales, centro de
                    salud, clínicas privadas y provisionales, etc.), tiene como
                    objetivo evitar la redundancia de datos, la agilización del
                    ingreso o egreso y traslado del paciente, evitar la sobre
                    carga para el personal, facilitar la información detallada
                    de cada paciente (historial clínico),mantener un orden
                    clínico , así mismo dar el mejor servicio de atención al
                    sistema de salud en Nicaragua.
                  </p>
                  <p className="text-left bg-[#ee4447] p-2 rounded-md">
                   <b>Visión:</b>  Nuestra visión es que VitFile se conozca a nivel
                    nacional y sea utilizado por todos los centros de atención
                    hospitalaria, con esto logramos dar oportunidades de trabajo
                    a la población nicaragüense, buscamos garantizar la
                    agilización de los procesos de salud que se hacen en todos
                    los centros de atención médica, donde les brindaríamos un
                    mejor servicio a la hora de dar atención hospitalaria al
                    paciente.
                  </p>
                  
                  </div>
                  <img src="./images/inicio.png" alt=""  className="w-[900px] items-center ml-[18%] md:ml-auto"/>
                </div>
              </div>
              <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    <p class="mb-4 text-basic leading-relaxed text-blueGray-700">
                      <i>!Un nuevo mundo a un solo click de distancia!!</i> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="relative bg-blueGray-200 pt-8 pb-6 mt-8">
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap items-center md:justify-between justify-center">
              <div class="w-full md:w-6/12 px-4 mx-auto text-center">
                <div class="text-sm text-blueGray-500 font-semibold py-1">
                  TechnoSource Todos los derechos reservados © 2022
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
