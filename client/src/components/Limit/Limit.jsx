import { closeLimit } from "./limitSlice";
import { useDispatch } from "react-redux";
import google from "../../assets/google.png";
import { motion } from "framer-motion";
import "./limit.css";
const Limit = () => {
  const dispatch = useDispatch();
  const googleAuth = () => {
    window.open("http://localhost:3000/auth/api/login", "_self");
  };
  return (
    <>
      <motion.div
        className="limit-main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p>
          Exceeded your free limits?
          <br />
          Join our free account for limitless link Shortening today!
        </p>
        <button
          className="limit-login"
          onClick={() => {
            googleAuth();
          }}
        >
          <div className="limit-google">
            <img src={google} alt="" />
          </div>
          Continue With Google
        </button>
        <button
          className="limit-close"
          onClick={() => {
            dispatch(closeLimit());
          }}
        >
          Close
        </button>
      </motion.div>
    </>
  );
};
export default Limit;
