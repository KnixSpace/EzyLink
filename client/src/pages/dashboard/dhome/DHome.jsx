import { Chart } from "react-google-charts";
import "./dhome.css";
import { useEffect, useState } from "react";
const DHome = ({ userData }) => {
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
      const rawData = await fetch(import.meta.env.VITE_DASHBOARD_HOME, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userId),
        credentials: "include",
      });
      const { total, geoData, lineData } = await rawData.json();
      setTotal(total);
      setGeoDatas(geoData);
      setKdata(lineData);
    };
    getData();
  }, [refresh]);

  const color = {
    colorAxis: { colors: ["#e3effb", "#0276ff"] },
  };

  const linedatas = [
    [{ type: "date", label: "Day" }, "Clicks"],
  ];

  kdata.map((item) => {
    const { date, click } = item;
    linedatas.push([new Date(date), click]);
  });

  const handleRotation = () => {
    setRotation(rotation + 360);
  };

  return (
    <>
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
    </>
  );
};
export default DHome;
