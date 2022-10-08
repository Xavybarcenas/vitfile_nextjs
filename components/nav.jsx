import Link from 'next/link'
import styles from "../components/styles/nav.module.css";

export default function nav() {
  return (
    <div>
      <nav className={styles.nav_container} >
        <ul className={styles.ul}>
          <li className={styles.li}><Link href="#"><a>Configuracion</a></Link></li>
          <li className={styles.li}><Link href="/dashboard"><a>Inicio</a></Link></li>
        </ul>
      </nav>
    </div>
  );
}
