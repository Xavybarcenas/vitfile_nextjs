import Head from "next/head";
import Layout from "/componentes/Layout";
import Link from "next/link";
import styles from "/styles/dashboard/ingresarPaciente.module.css";

export default function Perfil() {
  return (
    <>
      <Layout title="Datos Personales | Vitfile">
        <h1 className={styles.titulo}>Datos Personales</h1>
        <div className={styles.form} id="perfil">
          <form name="ingresar_Paciente">
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
            <label className={styles.label}>
              <span className={styles.span}>
                Sube Una Imagen
              </span>
              <input type="file" className={styles.input} />
            </label>
            <button className={styles.button} formAction="#">
              Guardar Cambios
            </button>
          </form>

          
        </div>
      </Layout>

      
    </>
  );

 
}
