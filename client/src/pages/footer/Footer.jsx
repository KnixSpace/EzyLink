import { useDispatch } from "react-redux";
import { openCredit } from "../credit/creditSlice";
import "./footer.css";
const Footer = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="dash-footer">
        <span
          className="dash-footer-credit"
          onClick={() => {
            dispatch(openCredit());
          }}
        >
          Credits
        </span>
        <span>© Copyright 2023 EzyLink</span>
        <span>
          <a href="https://github.com/KnixSpace" target="_blank">
            Developed By Krupal Patel
          </a>
        </span>
      </div>
    </>
  );
};
export default Footer;
