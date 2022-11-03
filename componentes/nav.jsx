import Link from 'next/link'
import FechaHora from './horafecha';

export default function nav() {

  

  return (
    <>
      <nav className="bg-cyan-900  text-white py-1 w-full lg:w-[82.2%] ls:w-[95%] hd:w-[77.8%] sm:text-[13px] ml-auto" >
        <ul className="contents">
          <li className='text-white text-right mr-4 sm:mr-10'><FechaHora/></li>
        </ul>
      </nav>
    </>
  );
}
