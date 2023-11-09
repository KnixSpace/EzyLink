import defaultPic from "../../../assets/default.svg";
import Logo from "../../../components/logo/Logo";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { lgMenuToggle } from "./dlmSlice";
import "./dnavbar.css";
import { smMenuOpen } from "./dsmSlice";
const DNavbar = ({ userData }) => {
  const { isLargeMenu } = useSelector((store) => store.lgMenuPage);
  const dispatch = useDispatch();
  return (
    <div className="dnavbar">
      <div className="dnav-logo">
        <div className="dlg">
          <span
            className="material-icons-outlined md-18 dnav-menu"
            onClick={() => {
              dispatch(lgMenuToggle(!isLargeMenu));
            }}
          >
            menu
          </span>
        </div>
        <div className="dsm">
          <span
            className="material-icons-outlined md-18 dnav-menu"
            onClick={() => {
              dispatch(smMenuOpen());
            }}
          >
            menu
          </span>
        </div>

        <Link to={"/"}>
          <Logo />
        </Link>
        <div className="nav-beta">
          Beta
        </div>
      </div>
      <div className="dnav-links">
        <div className="dnav-user">
          <span>{userData.name}</span>
          <img src={userData.picture} alt={userData.name} />
        </div>
      </div>
    </div>
  );
};
export default DNavbar;
