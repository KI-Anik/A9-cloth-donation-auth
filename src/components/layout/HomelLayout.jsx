import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Banner from "../Banner";

const HomelLayout = () => {
    return (
        <div className="container mx-auto">
           <Navbar></Navbar>
           <Banner></Banner>
           <div>
           <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default HomelLayout;