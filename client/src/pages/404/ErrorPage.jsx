import error from "../../assets/404-page.png";
import "./errorPage.css";
const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-page">
        <img src={error} alt="" />
      </div>
    </div>
  );
};
export default ErrorPage;
