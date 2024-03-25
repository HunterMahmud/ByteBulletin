import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from './../Components/Footer';

const MainLayout = () => (
    <div>
        <div className="h-16">
            <Navbar />
        </div>
        {/* packet of home, blogs, bookmark  */}
        <div  className="min-h-[calc(100vh-160px)] flex my-12">
        <Outlet />
        </div>
        <Footer />
    </div>
);

export default MainLayout;
