import Footer from "../footer/Footer";
import Navigationbar from "../navigationbar/Navigationbar";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./home.css";
const Home = () => {
  return (
    <AnimatePresence>
      <div className="home-container" key={3}>
        <Navigationbar />
        <div className="home-content-container flex-grow-1" key={4}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </AnimatePresence>
  );
};
export default Home;
