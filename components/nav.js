import Link from 'next/link'


export default function nav() {
  return (
    <div>
      <nav className="">
        <ul className="flex item-stretch">
          <li className='block flex'><Link href="/dashboard"><a>Inicio</a></Link></li>
        </ul>
      </nav>
    </div>
  );
}
