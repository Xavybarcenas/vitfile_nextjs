import Link from 'next/link'
import styles from "/components/styles/options.module.css";


export default function options() {
  return (
    <div className={styles.lef_panel}>
      <input type={'checkbox'} className="checkbox" id='check'></input>
      <label className={styles.menu_icon} htmlFor="check">|||</label>
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
    </div>
  )
}

    