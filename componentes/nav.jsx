import Link from 'next/link'
import FechaHora from './horafecha';

export default function nav() {

  

  return (
    <>
      <nav className="bg-cyan-900  text-white py-1 w-screen lg:w-[77%] sm:text-[13px] l:text-[16px] lg:ml-auto" >
        <ul className="contents">
          <li className='text-white text-right mr-4 sm:mr-10'><FechaHora/></li>
        </ul>
      </nav>
    </>
  );
}
