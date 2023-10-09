import Logo from "../../components/logo/Logo";
import { NavLink, Outlet } from "react-router-dom";
import "./dashboard.css";
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
            <div className="sidebar-item new-link">New Link</div>
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
    </>
  );
};
export default Dashboard;
