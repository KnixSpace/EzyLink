import "material-icons/iconfont/material-icons.css";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./dmenu.css";
const Dmenu = () => {
  const { isLargeMenu } = useSelector((store) => store.lgMenuPage);
  const { isSmallMenu } = useSelector((store) => store.smMenuPage);
  const handelLogout = () => {
    window.open("http://localhost:3000/auth/api/logout", "_self");
  };
  return (
    <>
      <div className="dash-menu">
        <div className="dash-items">
          <Link to={"newlink"} className="new">
            <span className="material-icons-outlined md-18">add_link</span>
            {isLargeMenu && (
              <span
                className={`dash-link-text ${
                  isLargeMenu && "dash-link-text-active"
                }`}
              >
                New Link
              </span>
            )}

            <span
              className={!isLargeMenu && "dash-m-tooltip"}
              style={{ display: isLargeMenu && "none" }}
            >
              New Link
            </span>
          </Link>
          <Link to={""} className="link">
            <span className="material-icons-outlined md-18">home</span>
            {isLargeMenu && (
              <span
                className={`dash-link-text ${
                  isLargeMenu && "dash-link-text-active"
                }`}
              >
                Home
              </span>
            )}

            <span
              className={!isLargeMenu && "dash-m-tooltip"}
              style={{ display: isLargeMenu && "none" }}
            >
              Home
            </span>
          </Link>
          <Link to={"links"} className="link">
            <span className="material-icons-outlined md-18">link</span>
            {isLargeMenu && (
              <span
                className={`dash-link-text ${
                  isLargeMenu && "dash-link-text-active"
                }`}
              >
                All Links
              </span>
            )}

            <span
              className={!isLargeMenu && "dash-m-tooltip"}
              style={{ display: isLargeMenu && "none" }}
            >
              All Links
            </span>
          </Link>
          <Link to={"analytics"} className="link">
            <span className="material-icons-outlined md-18">insights</span>
            {isLargeMenu && (
              <span
                className={`dash-link-text ${
                  isLargeMenu && "dash-link-text-active"
                }`}
              >
                Analytics
              </span>
            )}
            <span
              className={!isLargeMenu && "dash-m-tooltip"}
              style={{ display: isLargeMenu && "none" }}
            >
              Analytics
            </span>
          </Link>
        </div>
        <div className="dash-logout">
          <Link className="link" onClick={handelLogout}>
            <span className="material-icons-outlined md-18">logout</span>
            {isLargeMenu && (
              <span
                className={`dash-link-text ${
                  isLargeMenu && "dash-link-text-active"
                }`}
              >
                Logout
              </span>
            )}
            <span
              className={!isLargeMenu && "dash-m-tooltip"}
              style={{ display: isLargeMenu && "none" }}
            >
              Logout
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Dmenu;
