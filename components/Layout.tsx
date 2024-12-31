import { ReactElement} from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children} : {children : ReactElement} ) => {
    return ( 
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
     );
}
 
export default Layout;