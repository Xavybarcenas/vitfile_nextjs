import Navbar from "./nav";
import Options from "./options";

import Head from "next/head";

export default function layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <div>{children}</div>
      
      <aside>
        <Options />
      </aside>
    </>
  );
}

layout.defaultProps = {
  title: "Vitfile",
};
