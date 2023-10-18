import "./slink.css";
const Slink = (props) => {
  const { sr, createdOn, isActive, shortUrl, totalClicked } = props;
  console.log(createdOn);
  return (
    <>
      <div className="slink-container">
        <span className="slink-item">{sr + 1}</span>
        <span className="slink-item">{createdOn}</span>
        <a
          className="slink-item"
          href={`http://localhost:3000/${shortUrl}`}
          target="_blank"
        >
          http://localhost:3000/{shortUrl}
        </a>
        <span className="slink-item">{totalClicked}</span>
        <div className="slink-item">
          <span
            className="material-icons-outlined md-18"
            style={{ color: isActive ? "#6ccca5 " : "red" }}
          >
            radio_button_checked
          </span>
        </div>
        <div className="slink-item">
          <span
            className="material-icons-outlined md-18"
            style={{ color: "#cc0016" }}
          >
            delete
          </span>
        </div>
      </div>
    </>
  );
};
export default Slink;
