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
      <div className="absolute lg:left-[23.6%] lg:w-[76.6%] sm:left-0 sm:w-full scroll-auto h-screen">{children}</div>

      <aside>
        <Options />
      </aside>
    </>
  );
}

layout.defaultProps = {
  title: "Vitfile",
};
