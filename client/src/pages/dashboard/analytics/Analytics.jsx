import { Chart } from "react-google-charts";
import { useState } from "react";
import gp from "../../../assets/google.png";
import "./analytic.css";
const Analytics = () => {
  const [blank, setBlank] = useState(false);

  const data = [
    ["week", "click"],
    [1, 2],
    [2, 4],
    [3, 1],
    [4, 2],
    [5, 5],
    [6, 3],
    [7, 4],
  ];

  const geoData = [
    ["country", "click"],
    ["IN", 4],
    ["US", 10],
  ];

  const color = {
    colorAxis: { colors: ["#e3effb", "#0276ff"] },
  };
  return (
    <>
      <div className="analytic-main">
        <span className="analytic-title">Analytics</span>
        <div className="analytic-searchbar">
          <span className="analytic-heading">
            Find the <span>Analytics</span> of your links
          </span>
          <div className="input-div">
            <input
              className="searchbar-input"
              type="text"
              placeholder="Search your links"
            />
            <button className="asearch">search</button>
            <button className="mini-search">
              <span class="material-icons-outlined">search</span>
            </button>
          </div>
        </div>
        <div className="analytic-content">
          {blank ? (
            <>
              <div>Find your urls</div>
            </>
          ) : (
            <>
              <div className="analytic-content-inner">
                <div className="abox-1 abox">
                  <span className="atitle">Details</span>
                  <div className="aitem al">
                    <div className="adetails">
                      <span className="aititle">Created On :</span>
                      <span className="aitext">12-10-2023</span>
                    </div>
                    <div className="adetails">
                      <span className="aititle">Short Url :</span>
                      <a
                        href={`http://localhost:3000/`}
                        className="aitext"
                      >{`http://localhost:3000/`}</a>
                    </div>
                    <div className="adetails">
                      <span className="aititle">Long Url :</span>
                      <a href={""} className="aitext">
                        https://youtube.com/asdfghjklqwertyuioppasdfghjklzxcvbnm
                      </a>
                    </div>
                    <div className="adetails">
                      <span className="aititle">Weekly average insight :</span>
                      <span className="aitext">125</span>
                    </div>
                    <div className="adetails">
                      <span className="aititle">Status :</span>
                      <span className="aitext">Active</span>
                    </div>
                    <div className="adetails">
                      <span className="aititle">Expiration :</span>
                      <span className="aitext">12-10-2023</span>
                    </div>
                  </div>
                </div>
                <div className="abox-2 abox">
                  <span className="atitle">Total Insight</span>
                  <span className="aitem">245</span>
                </div>
                <div className="abox-3 abox">
                  <span className="atitle">Globalized</span>
                  <div className="country-scroll">
                    <img
                      src={gp}
                      alt=""
                      style={{ width: "54px", height: "54px" }}
                    />
                  </div>
                </div>
                <div className="abox-4 abox">
                  <span className="atitle">Weekly Data</span>
                  <Chart
                    chartType="Line"
                    data={data}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    chartVersion="current"
                  ></Chart>
                </div>
                <div className="abox-5 abox">
                  <span className="atitle">Geo Data</span>
                  <Chart
                    chartType="GeoChart"
                    data={geoData}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    options={color}
                    chartVersion="current"
                  ></Chart>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Analytics;
