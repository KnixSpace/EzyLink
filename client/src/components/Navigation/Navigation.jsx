import Logo from "../logo/Logo";
import { openPage } from "../../pages/login-signup/loginSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import "./navigation.css";
import { NavLink, Outlet } from "react-router-dom";
const Navigation = () => {
  const dispatch = useDispatch();
  const user = false;
  if (user) {
    return (
      <>
        <div className="navigation-nav d-flex">
          <div className="flex-grow-1">
            <Logo />
          </div>
          <div className="navigation-button">
            <button className="border-0">User</button>
          </div>
        </div>
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
