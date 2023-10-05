import google from "../../assets/google.png";
import Logo from "../../components/logo/Logo";
import { closePage } from "./loginSlice";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import "./login.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const googleAuth = () => {
    window.open("http://localhost:3000/auth/api/login", "_self");
  };
  return (
    <>
      <motion.div
        className="login-main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="login-inner">
          <Logo />
          <div className="login-text">
            Start shorting your <br /> URLs <br /> keep track and <br /> many
            more....
          </div>
          <button
            className="login-button"
            onClick={() => {
              googleAuth();
              dispatch(closePage());
            }}
          >
            <div className="login-google">
              <img src={google} alt="" />
            </div>
            Continue With Google
          </button>
        </div>
        <div
          className="login-close"
        >
          <i
            className="fa-solid fa-xmark fa-2xl"
            onClick={() => {
              dispatch(closePage());
            }}
          ></i>
        </div>
      </motion.div>
    </>
  );
};
export default Login;
