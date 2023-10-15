import Logo from "../../../components/logo/Logo";
import "./dnavbar.css";
const DNavbar = ({ userData }) => {
  return (
    <div className="dnavbar">
      <div className="dnav-logo">
        <span class="material-icons-outlined md-18">menu</span>
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
