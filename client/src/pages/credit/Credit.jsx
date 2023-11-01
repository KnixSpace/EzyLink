import { useDispatch } from "react-redux";
import Logo from "../../components/logo/Logo";
import { closeCredit } from "./creditSlice";
import "./credit.css";
const Credit = () => {
  const dispatch = useDispatch();
  return (
    <div className="credit_main">
      <div className="credit-container">
        <Logo />
        <a href="https://www.freepik.com/author/stories" target="_blank">
          Images By Storyset on Freepik
        </a>
        <div
          className="credit-close"
          onClick={() => {
            dispatch(closeCredit());
          }}
        >
          <span class="material-icons-outlined md-36 md-24">close</span>
        </div>
      </div>
    </div>
  );
};
export default Credit;
