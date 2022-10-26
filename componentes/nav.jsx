import Link from 'next/link'


export default function nav() {
  return (
    <>
      <nav className="bg-cyan-900 flex justify-end text-white py-1" >
        <ul className="contents">
          <li className="flex-none order-last mx-[50px]"><Link href="/"><a>Cerrar Sesión</a></Link></li>
          <li className="flex-none mx-2"><Link href="/dashboard"><a>Inicio</a></Link></li>
        </ul>
      </nav>
    </>
  );
}
