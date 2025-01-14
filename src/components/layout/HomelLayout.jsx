import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const HomelLayout = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
           <div className="min-h-[calc(100vh-288px)]">
           <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default HomelLayout;