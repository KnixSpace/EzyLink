import { openPage } from "../login-signup/loginSlice";
import { sidebarInactive } from "./sidebarSlice";
import Logo from "../../components/logo/Logo";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
const Sidebar = ({ show }) => {
  const { isSidebar } = useSelector((store) => store.sidebar);
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={isSidebar ? "sidebar-main sidebar-active" : "sidebar-main"}
        onClick={() => {
          dispatch(sidebarInactive());
        }}
      >
        <div className="sidebar-close">
          <NavLink to={"/"}>
            <Logo />
          </NavLink>
          <span
            class="material-icons-outlined"
            onClick={() => {
              dispatch(sidebarInactive());
            }}
          >
            close
          </span>
        </div>
        <NavLink
          className="sidebar-link"
          onClick={() => {
            dispatch(openPage());
          }}
        >
          Login
        </NavLink>
        <NavLink to={"about"} className="sidebar-link">
          About
        </NavLink>
        <NavLink to={"/"} className="sidebar-link">
          Home
        </NavLink>
      </div>
    </>
  );
};
export default Sidebar;
