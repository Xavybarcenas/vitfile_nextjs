import Navbar from "./nav";
import Options from "./options";
import styles from "../components/styles/layout.module.css"
import Head from "next/head";

export default function layout({ title, children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main>{children}</main>
      <aside>
        <Options />
      </aside>
    </div>
  );
}

layout.defaultProps = {
  title: "Vitfile",
  
}
