import "material-icons/iconfont/material-icons.css";
import { Link } from "react-router-dom";
import "./dmenu.css";

const Dmenu = () => {
  return (
    <>
      <div className="dash-menu">
        <div className="dash-items">
          <Link to={"newlink"} className="link new">
            <span class="material-icons-outlined md-18">add_link</span>
            <span className="dash-link-text">New Link</span>
          </Link>
          <Link to={""} className="link">
            <span class="material-icons-outlined md-18">home</span>
            <span className="dash-link-text">Home</span>
          </Link>
          <Link to={"links"} className="link">
            <span class="material-icons-outlined md-18">link</span>
            <span className="dash-link-text">All Links</span>
          </Link>
          <Link to={"analytics"} className="link">
            <span class="material-icons-outlined md-18">insights</span>
            <span className="dash-link-text">Analytics</span>
          </Link>
        </div>
        <div className="dash-logout">
          <Link className="link">
            <span class="material-icons-outlined md-18">logout</span>
            <span className="dash-link-text">Logout</span>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Dmenu;
