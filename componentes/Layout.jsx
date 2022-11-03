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
      <div className=" absolute w-screnn h-screen lg:left-[23.5%] lg:w-[76.5%] hd:left-[22.2%] hd:w-[77.8%]  sm:left-0 sm:w-full  scroll-auto ">{children}</div>

      <aside>
        <Options />
      </aside>
    </>
  );
}

layout.defaultProps = {
  title: "Vitfile",
};
