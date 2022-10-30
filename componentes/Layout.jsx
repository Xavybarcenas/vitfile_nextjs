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
      <div className="absolute w-screnn h-screen lg:left-[17.8%] lg:w-[82.16%]  sm:left-0 sm:w-full  scroll-auto  bg-gray-100">{children}</div>

      <aside>
        <Options />
      </aside>
    </>
  );
}

layout.defaultProps = {
  title: "Vitfile",
};
