import { Link } from "react-router-dom";
import "./dmenu.css";

const Dmenu = () => {
  return (
    <>
      <div className="dash-menu">
        <div className="dash-items">
          <Link to={"newlink"} className="link">
            New Link
          </Link>
          <Link to={""} className="link">
            Home
          </Link>
          <Link to={"links"} className="link">
            All Links
          </Link>
          <Link to={"analytics"} className="link">
            Analytics
          </Link>
        </div>
        <div className="dash-logout">
          <Link className="link">Logout</Link>
        </div>
      </div>
    </>
  );
};
export default Dmenu;
