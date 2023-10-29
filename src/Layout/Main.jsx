import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
// import Footer from "../Pages/Shared/Footer/Footer";


const Main = () => {
    return (
        <div >
           <div>
           <Navbar></Navbar>
            <Outlet></Outlet>
           </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;