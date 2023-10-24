import { NavLink } from "react-router-dom";
import "./dsmallMenu.css";
import Logo from "../../../components/logo/Logo";
import { smMenuClose } from "../dnavbar/dsmSlice";
import { useDispatch, useSelector } from "react-redux";
const DSmallMenu = () => {
  const { isSmallMenu } = useSelector((store) => store.smMenuPage);
  const dispatch = useDispatch();

  const handelLogout = () => {
    window.open("http://localhost:3000/auth/api/logout", "_self");
  };
  return (
    <>
      <div
        className={isSmallMenu ? "dsm-main dsm-active" : "dsm-main"}
        onClick={() => {
          dispatch(smMenuClose());
        }}
      >
        <div className="dsm-brand">
          <NavLink>
            <Logo />
          </NavLink>
          <span
            className="material-icons-outlined"
            onClick={() => {
              dispatch(smMenuClose());
            }}
          >
            close
          </span>
        </div>
        <div className="dsm-links-c">
          <NavLink className="dsm-links" to={"newLink"}>
            New Link
          </NavLink>
          <NavLink className="dsm-links" to={"/"}>
            Home
          </NavLink>
          <NavLink className="dsm-links" to={"links"}>
            Links
          </NavLink>
          <NavLink className="dsm-links" to={"analytics"}>
            Analytics
          </NavLink>
        </div>
        <NavLink className="dsm-links" onClick={handelLogout}>
          Logout
        </NavLink>
      </div>
    </>
  );
};
export default DSmallMenu;
