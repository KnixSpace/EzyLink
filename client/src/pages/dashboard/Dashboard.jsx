import Logo from "../../components/logo/Logo";
import { NavLink, Outlet } from "react-router-dom";
import "./dashboard.css";
import ShortUrl from "../shortUrl/ShortUrl";
const Dashboard = ({ userData }) => {
  return (
    <>
      <div className="dashboard-nav">
        <div className="row">
          <div className="col d-flex">
            <Logo />
          </div>
          <div className="col d-flex dashboard-user">
            <div>{userData.name}</div>
            <div className="dashboard-user-img">
              <img src={userData.picture} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-main container-fluid">
        <div className="row">
          <div className="col-auto dash-sidebar">
            <NavLink to={"newlink"} className="sidebar-item">
              New Link
            </NavLink>
            <NavLink to={""} className="sidebar-item">
              Home
            </NavLink>
            <NavLink to={"analytics"} className="sidebar-item">
              Analytics
            </NavLink>
            <NavLink to={"links"} className="sidebar-item">
              Links
            </NavLink>
          </div>
          <div className="col">
            <Outlet />
          </div>
        </div>
      </div>
      <footer className="dashboard-footer row">
        <div className="col"></div>
        <div className="col">copyright © 2023 Ezylink</div>
        <div className="col">
          Developed by{" "}
          <a href="https://github.com/KnixSpace" target="_blank">
            Krupal Patel
          </a>
        </div>
      </footer>
    </>
  );
};
export default Dashboard;
