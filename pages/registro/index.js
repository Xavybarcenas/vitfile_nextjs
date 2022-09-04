import Head from "next/head";
import Layout from "../../components/Layout";
import styles from "/styles/registro/registro.module.css";
import Link from "next/link";

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
            <h1>El dashboard</h1>
            <Link href="/">
              <a>Login</a>
            </Link>
            
          </div>
        </main>
      </Layout>
    </div>
  );
}
