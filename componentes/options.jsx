import Link from 'next/link'
import styles from "/componentes/styles/options.module.css";


export default function options() {
  return (
    <div className={styles.left_panel}>
    
    <nav className={styles.nav}>
      
      <Link href="/Dashboard/perfil">
        <a><img src="/images/foto.jpg" className={styles.foto_perfil}></img>Perfil</a>
      </Link>
      <Link href="/Dashboard">
        <a>Inicio</a>
      </Link>
      <Link href="/Dashboard/pacientes">
        <a>Listar Pacientes</a>
      </Link>
      <Link href="/Dashboard/ingresarPaciente">
        <a>Ingresar Paciente</a>
      </Link>
      <Link href="#">
        <a>Consultas</a>
      </Link>
      
    </nav>
    </div>
  )
}

    