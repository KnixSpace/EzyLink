import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { openPage } from "../login-signup/loginSlice";
import Input from "../../components/input/input";
import "./home.css";
import Logo from "../../components/logo/Logo";
import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="home-nav d-flex">
        <div className="flex-grow-1">
          <Logo />
        </div>
        <div className="home-button">
          <motion.button className="border-0" whileTap={{ scale: 0.9 }}>
            About
          </motion.button>
          <NavLink to="/login">
            <motion.button
              className="border-0"
              onClick={() => {
                dispatch(openPage());
              }}
              whileTap={{ scale: 0.9 }}
            >
              Login
            </motion.button>
          </NavLink>
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
      <div className="home-main container-sm container-lg d-flex flex-column">
        <div className="home-heading">Shorten Your URLs</div>
        <Input
          placeholder={"https://ezylink.in/xyz/..."}
          id={"iurl"}
          label={"Enter Your Long Urls"}
          name={"LongUrl"}
        />
        <button>Submit</button>
      </div>
      <Outlet />
    </>
  );
};
export default Home;
