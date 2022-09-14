import Link from 'next/link'
import styles from "/components/styles/options.module.css";


export default function options() {
  return (
    <nav className={styles.nav}>
      <Link href="/dashboard/perfil">
        <a><img src="/images/foto.jpg" className={styles.iconos}></img>Perfil</a>
      </Link>
      <Link href="/dashboard">
        <a>Inicio</a>
      </Link>
      <Link href="#">
        <a>Consultas</a>
      </Link>
      <Link href="/">
        <a>Cerrar Sesion</a>
      </Link>
    </nav>
  )
}

    