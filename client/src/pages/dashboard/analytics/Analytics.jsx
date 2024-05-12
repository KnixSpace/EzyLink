import validateUrl from "../../../validations/urlValidator";
import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";
import Flag from "../../../components/flag/Flag";
import noData from "../../../assets/no-data.png";
import analytic from "../../../assets/analytics.png";
import "./analytic.css";
import Loadere from "../../../components/loader/Loadere";
const Analytics = ({ userData }) => {
  const [loading, setLoading] = useState(false);
  const [blank, setBlank] = useState(true);
  const [url, setUrl] = useState("");
  const [data, setData] = useState("");
  const [edate, setEDate] = useState("");
  const [flagData, setFlagData] = useState([]);
  const [error, setError] = useState(false);
  const [urlError, setUrlError] = useState("");

  let num = 0;
  const getFlag = async (country) => {
    const data = await fetch(
      `https://restcountries.com/v3.1/name/${country}?fields=flags`
    );
    const rdata = await data.json();
    if (country === "India") {
      return rdata[1]?.flags?.png;
    }
    return rdata[0]?.flags?.png;
  };

  const handelClick = async () => {
    const validError = validateUrl(url.trim());
    if (validError) {
      setUrl("");
      setUrlError("Please enter valid Url");
      return;
    }
    setLoading(true);
    const path = new URL(url).pathname;
    const shortUrl = path.split("/").pop().trim();
    const uData = {
      email: userData.email,
      shortUrl,
    };

    fetch(import.meta.env.VITE_DASHBOARD_ANALYTICS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(uData),
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((rawData) => {
        if (rawData.error) {
          setBlank(true);
          setError(true);
          setLoading(false);
          return;
        }
        setBlank(false);
        setError(false);
        setData(rawData);

        const part = rawData?.createdOn.split("/");
        const cDate = new Date(`${part[1]}/${part[0]}/${part[2]}`);
        const newDate = new Date(cDate);
        newDate.setFullYear(cDate.getFullYear() + 10);
        const stdate = newDate.toLocaleDateString("en-IN");
        setEDate(stdate);
        const flagPromise = rawData?.geoData
          .slice(1)
          .map((item) => getFlag(item[0]));
        Promise.all(flagPromise)
          .then((rflagData) => {
            setFlagData(rflagData);
          })
          .catch((error) => {
            console.error("An error occurred:", error);
          });

        setLoading(false);
      });
  };
  const { isActive, longUrl, createdOn, totalClicked, lineData, geoData } =
    data;

  //line data
  const olineData = [[{ type: "date", label: "Day" }, "clicks"]];
  lineData?.map((item) => {
    const { date, click } = item;
    olineData.push([new Date(date), click]);
  });

  //chart options
  const color = {
    colorAxis: { colors: ["#e3effb", "#0276ff"] },
  };
  return (
    <>
      <div className="loader-box">{loading && <Loadere key={15} />}</div>
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
              onChange={(e) => {
                setUrl(e.target.value);
              }}
              value={url ? url : urlError}
              onFocus={() => {
                setUrlError("");
              }}
              style={{
                color: urlError ? "#cc0016" : "",
                backgroundColor: urlError ? "#ffe6e9" : "#e3effb",
              }}
            />
            <button
              className="asearch"
              onClick={() => {
                handelClick();
              }}
            >
              search
            </button>
            <button
              className="mini-search"
              onClick={() => {
                handelClick();
              }}
            >
              <span className="material-icons-outlined">search</span>
            </button>
          </div>
        </div>
        <div className="analytic-content">
          {blank ? (
            <>
              {error ? null : (
                <>
                  <div className="analytic-illus">
                    <img src={analytic} alt="" />
                  </div>
                </>
              )}
              {error && (
                <>
                  <div className="analytic-illus">
                    <img src={noData} alt="" />
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <div className="analytic-content-inner">
                <div className="abox-1 abox">
                  <span className="atitle">Details</span>
                  <div className="aitem al">
                    <div className="adetails">
                      <span className="aititle">Created On :</span>
                      <span className="aitext">{createdOn}</span>
                    </div>
                    <div className="adetails">
                      <span className="aititle">Short Url :</span>
                      <a href={url.trim()} target="_blank" className="aitext">
                        {url.trim()}
                      </a>
                    </div>
                    <div className="adetails">
                      <span className="aititle">Long Url :</span>
                      <a href={longUrl} target="_blank" className="aitext">
                        {longUrl}
                      </a>
                    </div>
                    <div className="adetails">
                      <span className="aititle">Status :</span>
                      <span className="aitext">
                        {isActive ? "Active" : "Inactive"}
                      </span>
                    </div>
                    <div className="adetails">
                      <span className="aititle">Expiration :</span>
                      <span className="aitext">{edate}</span>
                    </div>
                  </div>
                </div>
                <div className="abox-2 abox">
                  <span className="atitle">Total Insight</span>
                  <span className="aitem">{totalClicked}</span>
                </div>
                <div className="abox-3 abox">
                  <span className="atitle">Globalized</span>
                  <div className="country-scroll">
                    {flagData.map((flag, index) => (
                      <Flag key={index} flagImg={flag} />
                    ))}
                  </div>
                </div>
                <div className="abox-4 abox">
                  <span className="atitle">Weekly Data</span>
                  <Chart
                    chartType="Line"
                    data={olineData}
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
