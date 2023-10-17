import Logo from "../../../components/logo/Logo";
import { useDispatch, useSelector } from "react-redux";
import { lgMenuToggle } from "./dlmSlice";
import "./dnavbar.css";
const DNavbar = ({ userData }) => {
  const { isLargeMenu } = useSelector((store) => store.lgMenuPage);
  const dispatch = useDispatch();
  return (
    <div className="dnavbar">
      <div className="dnav-logo">
        <span
          className="material-icons-outlined md-18 dnav-menu"
          onClick={() => {
            dispatch(lgMenuToggle(!isLargeMenu));
          }}
        >
          menu
        </span>
        <Logo />
      </div>
      <div className="dnav-links">
        <div className="dnav-user">
          <span>{userData.name}</span>
          <img src={userData.picture} alt="" />
        </div>
      </div>
    </div>
  );
};
export default DNavbar;
