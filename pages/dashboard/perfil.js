import Head from "next/head";
import Layout from "/components/Layout";
import Link from "next/link";
import styles from "/styles/dashboard/perfil.module.css";
import Script from "next/script";
export default function Perfil() {
  return (
    <div>
      <Layout title="Perfil | Vitfile">
        <div className={styles.perfil_card}>
          <h1 className={styles.titulo}>Perfil</h1>
          <img src="/images/foto.jpg" className={styles.foto_perfil} alt="Perfil"></img>

          <label className={styles.label} id='nombre'>
            <b>Nombre:</b> Ing. Byron Bárcenas
          </label>
          <label className={styles.label}>
            <b>Rol:</b> Administrador
          </label>
              
            
          <Link href="#">
            <a ><label className={styles.botones}>Cambiar Contraseña</label></a>
          </Link>
        </div>
      </Layout>
    </div>
  );
}
