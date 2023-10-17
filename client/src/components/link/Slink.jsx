import "./slink.css";
const Slink = (props) => {
  const { sr, createdOn, isActive, shortUrl, totalClicked } = props;
  console.log(createdOn);
  return (
    <>
      <div className="slink-container">
        <div className="slink-item">
          <span className="slink-title">Sr No</span>
          <span>{sr+1}</span>
        </div>
        <div className="slink-item">
          <span className="slink-title">Date</span>
          <span>{createdOn}</span>
        </div>
        <div className="slink-item">
          <span className="slink-title">Short Url</span>
          <a href={`http://localhost:3000/${shortUrl}`} target="_blank">
            http://localhost:3000/{shortUrl}
          </a>
        </div>
        <div className="slink-item">
          <span className="slink-title">active</span>
          <span
            className="material-icons-outlined"
            style={{ color: isActive ? "#6ccca5 " : "red" }}
          >
            radio_button_checked
          </span>
        </div>
        <div className="slink-item">
          <span className="slink-title">Total Click</span>
          <span>{totalClicked}</span>
        </div>
        <span
          className="material-icons-outlined slink-item"
          style={{ color: "#cc0016" }}
        >
          delete
        </span>
      </div>
    </>
  );
};
export default Slink;
