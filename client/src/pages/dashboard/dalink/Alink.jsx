import { useEffect, useState } from "react";
import Slink from "../../../components/link/Slink";
import "./alink.css";

const Alink = ({ userData }) => {
  const [urlData, setUrlData] = useState([]);
  const udata = {
    email: userData.email,
  };
  useEffect(() => {
    const getUrlData = async () => {
      const rawData = await fetch("http://localhost:3000/api/url/link/all", {
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
  }, []);

  return (
    <>
      <div className="alink-main">
        <div className="alink-container">
          {urlData.map((url, index) => {
           return <Slink {...url} sr={index} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};
export default Alink;
