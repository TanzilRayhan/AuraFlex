import { Outlet } from "react-router-dom";
//import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Main = () => {
    return (
        <div className="josefin">
           
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;