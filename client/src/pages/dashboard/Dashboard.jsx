import DNavbar from "./dnavbar/DNavbar";
import Dmenu from "./dmenu/Dmenu";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import "./dashboard.css";
import DSmallMenu from "./dsmallMenu/DSmallMenu";
const Dashboard = ({ userData }) => {
  const { isLargeMenu } = useSelector((store) => store.lgMenuPage);
  return (
    <>
      <div className="dash-main">
        <DNavbar userData={userData} />
        <div className="dash-container flex-grow-1">
          <div
            className="menu-container"
            style={{ width: isLargeMenu && "280px" }}
          >
            <Dmenu />
          </div>
          <DSmallMenu/>
          <div className="content-container">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Dashboard;
