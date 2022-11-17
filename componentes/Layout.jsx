import Head from "next/head";
import Navbar from "./Navbar";
import Options from "./Options";

export default function layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <div className="absolute h-full w-screen lg:w-[76.5%] lg:left-[23.5%] hd:left-[12.5%] hd:w-[87.5%] dark:bg-black">
        {children} 
      </div>
      <aside>
        <Options />
      </aside>
    </>
  );
}
//componente layout estructurado para usar una sola estructura de la aplicacion web
layout.defaultProps = {
  title: "Vitfile",
};
