import Link from 'next/link'
import styles from "../componentes/styles/nav.module.css";

export default function nav() {
  return (
    <div>
      <nav className={styles.nav_container} >
        <ul className={styles.ul}>
          <li className={styles.li}><Link href="/"><a>Cerrar Sesión</a></Link></li>
          <li className={styles.li}><Link href="/Dashboard"><a>Inicio</a></Link></li>
        </ul>
      </nav>
    </div>
  );
}
