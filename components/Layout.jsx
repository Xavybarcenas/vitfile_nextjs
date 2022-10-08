import Navbar from "./nav";
import Options from "./options";
import styles from "../components/styles/layout.module.css";
import Head from "next/head";

export default function layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <section><main className={styles.container}>{children}</main></section>
      <aside>
      <Options />
      </aside>
      
      
    </div>
  );
}

layout.defaultProps = {
  title: "Vitfile",
};
