import Link from 'next/link'
import styles from "/components/styles/options.module.css";


export default function options() {
  return (
    <div className={styles.left_panel}>
    
    <nav className={styles.nav}>
      
      <Link href="/dashboard/perfil">
        <a><img src="/images/foto.jpg" className={styles.foto_perfil}></img>Perfil</a>
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
    </div>
  )
}

    