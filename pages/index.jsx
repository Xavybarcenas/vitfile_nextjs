import Head from "next/head";
import styles from "../styles/Login.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div >
      <Head>
        <title>Bienvenido</title>
        <meta name="description" content="Inicia Sesion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.body}>
        <div >
          <div className={styles.login_box}>
            <div className={styles.container}>
              <span className={styles.inicia}>Iniciar</span>
              <span className={styles.sesion}>Sesión</span>
            </div>
            <div className={styles.barra}></div>
            <div className={styles.imagen}>
              <img
                src={"/images/logo_login.png"}
                
                alt="logo_login"
              />
            </div>
            <form>
              <div className={styles.user_box}>
                <input type="text" name="username" required="" />
                <label>Usuario</label>
              </div>
              <div className={styles.user_box}>
                <input type="password" name="password" required="" />
                <label>Contraseña</label>
              </div>
              <Link href="/Dashboard">
                <a>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Ingresar
                </a>
              </Link>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
