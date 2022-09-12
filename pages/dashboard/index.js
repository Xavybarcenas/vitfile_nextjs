
import styles from "/styles/dashboard/dashboard.module.css";
import Options from "/components/options";
import Navbar from "../../components/nav";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Options />
        <span className="object-center">El dashboard</span>
      </div>
    </div>
  );
}
