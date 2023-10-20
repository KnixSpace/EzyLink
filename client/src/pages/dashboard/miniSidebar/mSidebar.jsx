import { Link } from "react-router-dom";
import { smMenuToggle } from "../dnavbar/dsmSlice";
import "./sidebar.css";
import { useDispatch, useSelector } from "react-redux";
const Sidebar = () => {
  const { isSmallMenu } = useSelector((store) => store.smMenuPage);
  const dispatch = useDispatch();
  return (
    <>
      <div className="sidebar-main">
        <div className="sidebar-menu">
          <Link
            to={"newlink"}
            className="new-sidebar sidebar-link"
            onClick={() => {
              useDispatch(smMenuToggle(!isSmallMenu));
            }}
          >
            <span className="material-icons-outlined md-18">add_link</span>
            <span className="dash-link-text">New Link</span>
          </Link>
          <Link to={""} className="sidebar-link">
            <span className="material-icons-outlined md-18">home</span>
            <span className="dash-link-text">Home</span>
          </Link>
          <Link to={"links"} className="sidebar-link">
            <span className="material-icons-outlined md-18">link</span>
            <span className="dash-link-text">All Links</span>
          </Link>
          <Link to={"analytics"} className="sidebar-link">
            <span className="material-icons-outlined md-18">insights</span>
            <span className="dash-link-text">Analytics</span>
          </Link>
        </div>
        <div className="sidebar-logout">
          <Link className="sidebar-link">
            <span className="material-icons-outlined md-18">logout</span>
            <span className="dash-link-text">Logout</span>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
