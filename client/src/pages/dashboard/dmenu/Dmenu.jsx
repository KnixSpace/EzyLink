import "material-icons/iconfont/material-icons.css";
import { Link } from "react-router-dom";
import "./dmenu.css";

const Dmenu = () => {
  const handelLogout = async () => {
    const res = await fetch("http://localhost:3000/auth/api/logout");
  };
  return (
    <>
      <div className="dash-menu">
        <div className="dash-items">
          <Link to={"newlink"} className="link new">
            <span className="material-icons-outlined md-18">add_link</span>
            <span className="dash-link-text">New Link</span>
          </Link>
          <Link to={""} className="link">
            <span className="material-icons-outlined md-18">home</span>
            <span className="dash-link-text">Home</span>
          </Link>
          <Link to={"links"} className="link">
            <span className="material-icons-outlined md-18">link</span>
            <span className="dash-link-text">All Links</span>
          </Link>
          <Link to={"analytics"} className="link">
            <span className="material-icons-outlined md-18">insights</span>
            <span className="dash-link-text">Analytics</span>
          </Link>
        </div>
        <div className="dash-logout">
          <Link className="link">
            <span className="material-icons-outlined md-18">logout</span>
            <span className="dash-link-text" onClick={handelLogout}>
              Logout
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Dmenu;
