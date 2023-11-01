import { useEffect, useState } from "react";
import Slink from "../../../components/link/Slink";
import noData from "../../../assets/no-data.png";
import "./alink.css";

const Alink = ({ userData }) => {
  const [refresh, setRefresh] = useState(0);
  const [urlData, setUrlData] = useState([]);
  const udata = {
    email: userData.email,
  };
  useEffect(() => {
    const getUrlData = async () => {
      const rawData = await fetch(import.meta.env.VITE_DASHBOARD_ALL_LINKS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(udata),
        credentials: "include",
      });

      const data = await rawData.json();
      setUrlData(data);
    };
    getUrlData();
  }, [refresh]);

  const handleRotation = () => {
    setRefresh(refresh + 360);
  };

  if (urlData.length === 0) {
    return (
      <>
        <div className="alink-illus-container">
          <div className="alink-illus">
            <img src={noData} alt="" />
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="alink-main">
        <div className="alink-title">
          <span>Your Links</span>
          <span
            className="material-icons-outlined refs"
            style={{ transform: `rotate(${refresh}deg)` }}
            onClick={handleRotation}
          >
            refresh
          </span>
        </div>
        <div className="alink-container">
          <div className="alink-heading">
            <span>Sr</span>
            <span>Date</span>
            <span>Short URL</span>
            <span>Total Clicked</span>
            <span>Status</span>
          </div>
          <div className="alink-item">
            {urlData.map((url, index) => {
              return <Slink {...url} sr={index} key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Alink;
