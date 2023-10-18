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
        <span className="slink-item" style={{color : isActive ? "#1DB954" : "#cc0016"}}>
          {isActive ? "Active" : "Inactive"}
        </span>
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


// background-color: #e6ffeb;
//   color: #009a2a;