import "material-icons/iconfont/material-icons.css";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./dmenu.css";
const Dmenu = () => {
  const { isLargeMenu } = useSelector((store) => store.lgMenuPage);
  const handelLogout = () => {
    window.open("http://localhost:3000/auth/api/logout", "_self");
  };
  return (
    <>
      <div className="dash-menu">
        <div className="dash-items">
          <Link to={"newlink"} className="link new">
            <span className="material-icons-outlined md-18">add_link</span>
            {isLargeMenu ? (
              <span className="dash-link-text">New Link</span>
            ) : null}
          </Link>
          <Link to={""} className="link">
            <span className="material-icons-outlined md-18">home</span>
            {isLargeMenu ? <span className="dash-link-text">Home</span> : null}
          </Link>
          <Link to={"links"} className="link">
            <span className="material-icons-outlined md-18">link</span>
            {isLargeMenu ? (
              <span className="dash-link-text">All Links</span>
            ) : null}
          </Link>
          <Link to={"analytics"} className="link">
            <span className="material-icons-outlined md-18">insights</span>
            {isLargeMenu ? (
              <span className="dash-link-text">Analytics</span>
            ) : null}
          </Link>
        </div>
        <div className="dash-logout">
          <Link className="link" onClick={handelLogout}>
            <span className="material-icons-outlined md-18">logout</span>
            {isLargeMenu ? (
              <span className="dash-link-text">Logout</span>
            ) : null}
          </Link>
        </div>
      </div>
    </>
  );
};
export default Dmenu;
