import { NavLink, Outlet } from "react-router-dom";
import DNavbar from "./dnavbar/DNavbar";
import Dfooter from "./dfooter/Dfooter";
import Dmenu from "./dmenu/Dmenu";
import "./dashboard.css";
const Dashboard = ({ userData }) => {
  return (
    <>
      <div className="dash-main">
        <DNavbar userData={userData} />
        <div className="dash-container flex-grow-1">
          <div className="menu-container">
            <Dmenu />
          </div>
          <div className="content-container">
            <Outlet />
          </div>
        </div>
        <Dfooter />
      </div>
    </>
  );
};
export default Dashboard;
