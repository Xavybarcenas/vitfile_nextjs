import Head from "next/head";
import Layout from "/components/Layout";
import Link from "next/link";
import styles from "/styles/dashboard/perfil.module.css";

export default function Perfil() {
  return (
    <div>
      <Layout title="Perfil | Vitfile">
        <h1 className={styles.titulo}>Ingresar Paciente</h1>
        <div className={styles.form} id="perfil">
          <form name="ingresar paciente">
            <label className={styles.label}>
              <span className={styles.span}>
                Nombres
              </span>
              <input type="text" className={styles.input} />
            </label>
            <label className={styles.label}>
              <span className={styles.span}>
                Apellidos
              </span>
              <input type="text" className={styles.input} />
            </label>
            <label className={styles.label}>
              <span className={styles.span}>
                Edad
              </span>
              <input type="text" className={styles.input} />
            </label>
            <label className={styles.label}>
              <span className={styles.span}>
                Tipo de Sangre
              </span>
              <input type="text" className={styles.input} />
            </label>
            <button className={styles.button} formAction="perfil">
              Guardar Cambios
            </button>
          </form>
        </div>
      </Layout>
    </div>
  );
}
