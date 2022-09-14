import Layout from '/components/Layout'
import styles from "/styles/dashboard/dashboard.module.css";
import Options from "/components/options";
import Navbar from "../../components/nav";

export default function Home() {
  return (
    <div>
      <Layout title="Dashboard">
        <span className="object-center">El dashboard</span>
      </Layout>
    </div>
  );
}
