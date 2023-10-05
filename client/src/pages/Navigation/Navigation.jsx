import Logo from "../../components/logo/Logo";
import { openPage } from "../login-signup/loginSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import "./navigation.css";
import { NavLink, Outlet } from "react-router-dom";
const Navigation = ({ userData }) => {
  const dispatch = useDispatch();
  if (userData) {
    return (
      <>
        <div className="navigation-nav d-flex">
          <div className="flex-grow-1">
            <Logo />
          </div>
          <div className="user-name">{userData?.name}</div>
          <div className="user-avatar">
            <img src={userData.picture} alt="" />
          </div>
        </div>
        <Outlet />
      </>
    );
  }
  return (
    <>
      <div className="navigation-nav d-flex">
        <div className="flex-grow-1">
          <Logo />
        </div>
        <div className="navigation-button">
          <NavLink to={"/"}>
            <motion.button className="border-0" whileTap={{ scale: 0.9 }}>
              Home
            </motion.button>
          </NavLink>
          <NavLink to={"/about"}>
            <motion.button className="border-0" whileTap={{ scale: 0.9 }}>
              About
            </motion.button>
          </NavLink>
          <motion.button
            className="border-0"
            onClick={() => {
              dispatch(openPage());
            }}
            whileTap={{ scale: 0.9 }}
          >
            Login
          </motion.button>
          <motion.button
            className="signup"
            onClick={() => {
              dispatch(openPage());
            }}
            whileTap={{ scale: 0.9 }}
          >
            Sign Up Free
          </motion.button>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
