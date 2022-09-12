import Link from 'next/link'


export default function nav() {
  return (
    <div>
      <nav className="bg-sky-900 p-1 text-sm justify-items-end">
        <ul className="flex item-stretch">
          <li className='block flex'><Link href="/dashboard"><a>Inicio</a></Link></li>
        </ul>
      </nav>
    </div>
  );
}
