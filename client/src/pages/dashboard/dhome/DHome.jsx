import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loadere from "../../../components/loader/Loadere";
import dashpic from "../../../assets/dashboard.png";
import "./dhome.css";
const DHome = ({ userData }) => {
  const [hloader, setHLoader] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [refresh, setRefresh] = useState(true);
  const [total, setTotal] = useState("");
  const [geoDatas, setGeoDatas] = useState([]);
  const [kdata, setKdata] = useState([]);
  useEffect(() => {
    const userId = {
      email: userData.email,
    };
    const getData = async () => {
      setHLoader(true);
      fetch(import.meta.env.VITE_DASHBOARD_HOME, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userId),
        credentials: "include",
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            setHLoader(false);
            throw new Error("Network response was not ok");
          }
        })
        .then((rawData) => {
          const { total, geoData, lineData } = rawData;
          setTotal(total);
          setGeoDatas(geoData);
          setKdata(lineData);
          setHLoader(false);
        });
    };
    getData();
  }, [refresh]);

  const color = {
    colorAxis: { colors: ["#e3effb", "#0276ff"] },
  };

  const linedatas = [[{ type: "date", label: "Day" }, "Clicks"]];

  kdata.map((item) => {
    const { date, click } = item;
    linedatas.push([new Date(date), click]);
  });

  const handleRotation = () => {
    setRotation(rotation + 360);
  };

  return (
    <>
      {hloader ? (
        <div className="loadere-box" key={11}>
          <Loadere />
        </div>
      ) : total ? (
        <div className="dhome">
          <div className="box box-1">
            <div className="box-1-inner">
              <span className="box-title">Total Hyperlink Accessed </span>
              <span
                className="material-icons-outlined refs"
                onClick={() => {
                  setRefresh(!refresh);
                  handleRotation();
                }}
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                refresh
              </span>
            </div>
            <span className="link-count">{total}</span>
          </div>
          <div className="box box-2">
            <span className="box-title">Weekly data</span>
            <div className="box-chart">
              <Chart
                className="char"
                chartType="Line"
                style={{ height: "100%", width: "100%" }}
                data={linedatas}
              />
            </div>
          </div>
          <div className="box box-3">
            <span className="box-title">Geo data</span>
            <div className="box-chart">
              <Chart
                className="char"
                chartType="GeoChart"
                options={color}
                style={{ height: "100%", width: "100%" }}
                data={geoDatas}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="dhome-no">
          <span className="no-title">
            Welcome to <span>Dashboard</span>
          </span>
          <div className="dhome-no-in">
            <span>
              Greetings <span>{userData.given_name}</span>
            </span>
            <span>Your presence lights up our dashboard.</span>
            <span>
              Let's get started with <span>shortenig links!</span>
            </span>
            <Link to={"newlink"} className="navi-link">
              Start
            </Link>
          </div>
          <div className="no-illus">
            <img src={dashpic} alt="" />
          </div>
        </div>
      )}
    </>
  );
};
export default DHome;
