import Logo from "../../components/logo/Logo";
import { Link, NavLink, Outlet } from "react-router-dom";
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
            <Link className="sidebar-item new-link">New Link</Link>
            <Link to={""} className="sidebar-item">
              Home
            </Link>
            <Link to={"analytics"} className="sidebar-item">
              Analytics
            </Link>
            <Link to={"links"} className="sidebar-item">
              Links
            </Link>
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
