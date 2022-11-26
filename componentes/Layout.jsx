import Head from "next/head";
import Navbar from "./Navbar";
import Options from "./Options";

export default function layout({ title, children, props }) {
  let rendered = props.data.map((element) => {
    return <TablaPaciente key={element.id} value={element} />;
  });
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <div className="absolute h-full w-screen lg:w-[76.5%] lg:left-[23.5%] hd:left-[15.5%] hd:w-[87.5%] dark:bg-black">
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
export async function getServerSideProps() {
  const URL = "http://localhost:1337/api/expedientes/";
  const response = await fetch(URL);
  const result = await response.json();
  console.log(result);
  return {
    props: {
      
    },
  };
}
