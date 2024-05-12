import { useEffect, useState } from "react";
import Slink from "../../../components/link/Slink";
import noData from "../../../assets/no-data.png";
import Loadere from "../../../components/loader/Loadere";
import "./alink.css";
const Alink = ({ userData }) => {
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const [urlData, setUrlData] = useState([]);
  const [nosData, setNoData] = useState(false);
  const udata = {
    email: userData.email,
  };
  useEffect(() => {
    const getUrlData = async () => {
      setLoading(true);
      fetch(import.meta.env.VITE_DASHBOARD_ALL_LINKS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(udata),
        credentials: "include",
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Network response was not ok");
          }
        })
        .then((data) => {
          setLoading(false);
          if (data.length === 0) {
            setNoData(true);
            return;
          }
          setUrlData(data);
        });
    };
    getUrlData();
  }, [refresh]);

  const handleRotation = () => {
    setRefresh(refresh + 360);
  };

  return (
    <>
      {loading ? (
        <div className="loader-box">
          <Loadere key={14} />
        </div>
      ) : nosData ? (
        <div className="alink-illus-container">
          <div className="alink-illus">
            <img src={noData} alt="" />
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
};
export default Alink;
