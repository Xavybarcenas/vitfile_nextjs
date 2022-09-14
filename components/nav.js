import Link from 'next/link'


export default function nav() {
  return (
    <div>
      <nav className="">
        <ul className="flex item-stretch my-1 ">
          <li className='block flex mx-2'><Link href="/dashboard"><a>Inicio</a></Link></li>
          <li className='block flex'><Link href="#"><a>Configuracion</a></Link></li>
        </ul>
      </nav>
    </div>
  );
}
