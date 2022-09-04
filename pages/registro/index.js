import Head from "next/head";
import Layout from "../../components/Layout";
import styles from "/styles/registro/registro.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio</title>
        <meta name="description" content="Inicio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <div  className={styles.container}>
            <h1> Este es el dashboard</h1>
            <a href="/">Login</a>
          </div>
        </main>
      </Layout>
    </div>
  );
}
