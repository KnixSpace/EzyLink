import "./slink.css";
const Slink = (props) => {
  const { sr, createdOn, isActive, shortUrl, totalClicked } = props;
  // console.log(createdOn);
  return (
    <>
      <div className="slink-container">
        <span className="slink-item">{sr + 1}</span>
        <span className="slink-item">{createdOn}</span>
        <a
          className="slink-item"
          href={import.meta.env.VITE_SHORT_URL + shortUrl}
          target="_blank"
        >
          {import.meta.env.VITE_SHORT_URL + shortUrl}
        </a>
        <span className="slink-item">{totalClicked}</span>
        <span
          className="slink-item"
          style={{ color: isActive ? "#1DB954" : "#cc0016" }}
        >
          {isActive ? "Active" : "Inactive"}
        </span>
      </div>
    </>
  );
};
export default Slink;
