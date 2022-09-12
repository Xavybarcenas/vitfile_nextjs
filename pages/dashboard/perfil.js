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
    <div>
      <Options/>
      <span>El Perfil</span>
      </div>
      </div>
  );
}
