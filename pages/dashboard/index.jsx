import Layout from '/components/Layout'
import styles from "/styles/dashboard/dashboard.module.css";
import Options from "/components/options";
import Navbar from "../../components/nav";

export default function Home() {
  return (
    <>
      <Layout title="Dashboard">
        <h1 className="">Bienvenido Que deseas hacer?</h1>
      </Layout>
    </>
  );
}
