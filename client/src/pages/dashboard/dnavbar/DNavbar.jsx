import Logo from "../../../components/logo/Logo";
import { useDispatch, useSelector } from "react-redux";
import { lgMenuToggle } from "./dlmSlice";
import { smMenuToggle } from "./dsmSlice";
import "./dnavbar.css";
const DNavbar = ({ userData }) => {
  const { isLargeMenu } = useSelector((store) => store.lgMenuPage);
  const { isSmallMenu } = useSelector((store) => store.smMenuPage);
  const dispatch = useDispatch();
  return (
    <div className="dnavbar">
      <div className="dnav-logo">
        <span
          className="material-icons-outlined dnav-menu"
          onClick={() => {
            dispatch(smMenuToggle(!isSmallMenu));
          }}
        >
          menu
        </span>
        <span
          className="material-icons-outlined dnav-menu"
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
