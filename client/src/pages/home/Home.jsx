import Footer from "../footer/Footer";
import Credit from "../credit/Credit";
import Navigationbar from "../navigationbar/Navigationbar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./home.css";
const Home = () => {
  const { isCredit } = useSelector((store) => store.creditPage);
  return (
    <AnimatePresence>
      {isCredit && <Credit key={10} />}
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
