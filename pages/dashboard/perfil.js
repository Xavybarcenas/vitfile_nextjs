import Head from "next/head";
import Layout from "../../components/Layout";
import styles from "/styles/dashboard/dashboard.module.css";
import Link from "next/link";
import Options from "/components/options";
import Navbar from "../../components/nav";

export default function Perfil() {
  return (
    <div>
      <Navbar/>
    
    <div className={styles.container}>
      
      <Options/>
      <span className={styles.titulo}>El Perfil</span>
      </div>
      </div>
  );
}
