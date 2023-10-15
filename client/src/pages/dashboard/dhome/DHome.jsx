import { Chart } from "react-google-charts";
import "./dhome.css";
const DHome = () => {
  const data = [
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
  ];

  const options = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
  };

  const geoData = [
    ["Country", "Popularity"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700],
    ["India", 800],
  ];

  const clo = {
    colorAxis: { colors: ["#e3effb", "#0276ff"] },
  };

  return (
    <>
      <div className="dhome">
        <div className="box box-1">
          <span>1</span>
          <span>2</span>
        </div>
        <div className="box box-2">
          {/* <Chart
            chartType="LineChart"
            data={data}
            options={options}
            legendToggle
            style={{ height: "100%", width: "100%" }}
          /> */}
        </div>
        <div className="box box-3">
          {/* <Chart
            className="char"
            chartType="GeoChart"
            options={clo}
            style={{ height: "100%", width: "100%" }}
            data={geoData}
          /> */}
        </div>
      </div>
    </>
  );
};
export default DHome;
