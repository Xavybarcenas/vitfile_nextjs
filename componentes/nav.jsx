import Link from 'next/link'


export default function nav() {
  return (
    <>
      <nav className="" >
        <ul className="">
          <li className=""><Link href="/"><a>Cerrar Sesión</a></Link></li>
          <li className=""><Link href="/Dashboard"><a>Inicio</a></Link></li>
        </ul>
      </nav>
    </>
  );
}
