import Navbar from "./nav";
import Options from "./options"

const Layout = ({ children }) => {
  return (
    <div>
      
      
      <main>
      <Options />
        {children}
       
        </main>
      
    </div>
    
  );
};

export default Layout;
