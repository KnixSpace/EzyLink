import Logo from "../../components/logo/Logo";
import { openPage } from "../login-signup/loginSlice";
import { useDispatch } from "react-redux";
import "./navigation.css";
import { NavLink, Outlet } from "react-router-dom";
const Navigation = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="navigation-nav d-flex">
        <div className="flex-grow-1">
          <Logo />
        </div>
        <div className="navigation-button">
          <NavLink to={"/"}>
            <button className="border-0">
              Home
            </button>
          </NavLink>
          <NavLink to={"/about"}>
            <button className="border-0">
              About
            </button>
          </NavLink>
          <button
            className="border-0"
            onClick={() => {
              dispatch(openPage());
            }}
          >
            Login
          </button>
          <button
            className="signup"
            onClick={() => {
              dispatch(openPage());
            }}
          >
            Sign Up Free
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
