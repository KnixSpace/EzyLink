import DNavbar from "./dnavbar/DNavbar";
import Dfooter from "./dfooter/Dfooter";
import Dmenu from "./dmenu/Dmenu";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import "./dashboard.css";
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
