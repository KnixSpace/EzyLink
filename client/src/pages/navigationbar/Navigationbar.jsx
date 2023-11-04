import Logo from "../../components/logo/Logo";
import Sidebar from "../sidebar/Sidebar";
import { sidebarActive } from "../sidebar/sidebarSlice";
import { openPage } from "../login-signup/loginSlice";
import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import "./navigation.css";
const Navigationbar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="navigation-main">
        <div className="navigation-brand">
          <span
            className="material-icons-outlined"
            onClick={() => {
              dispatch(sidebarActive());
            }}
          >
            menu
          </span>
          <NavLink to={"/"}>
            <Logo />
          </NavLink>
        </div>
        <div className="navigation-links">
          <NavLink to={""} className={"navigation-item"}>
            Home
          </NavLink>
          <NavLink to={"about"} className={"navigation-item"}>
            About
          </NavLink>
          <NavLink
            className={"navigation-item"}
            onClick={() => {goog
              dispatch(openPage());
            }}
          >
            Login
          </NavLink>
          <NavLink
            className={"navigation-item nav-sign-up"}
            onClick={() => {
              dispatch(openPage());
            }}
          >
            Sign Up
          </NavLink>
        </div>
        <div className="sm-navigation-links">
          <NavLink
            className={"navigation-item nav-sign-up"}
            onClick={() => {
              dispatch(openPage());
            }}
          >
            Sign Up
          </NavLink>
        </div>
      </div>
      <div className="sidebar-menu">
        <Sidebar />
      </div>
    </>
  );
};
export default Navigationbar;
