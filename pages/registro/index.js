import Head from "next/head";
import Layout from "../../components/Layout";
import styles from "/styles/registro/registro.module.css";
import Link from "next/link";
import Options from "/components/options";



export default function Home() {
  return (
    <div className={styles.container}>
      <Options/>
      <h1>El dashboard</h1>
      <Link href="/">
        <a>Login</a>
      </Link>
      </div>
  );
}
