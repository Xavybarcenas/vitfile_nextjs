import Navbar from "./nav";
import Options from "./options";

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <Options />
    </div>
  );
};

export default Layout;
