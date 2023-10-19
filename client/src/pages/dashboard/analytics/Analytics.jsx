import { useState } from "react";
import gp from "../../../assets/google.png"
import "./analytic.css";
const Analytics = () => {
  const [blank, setBlank] = useState(false);
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
            <button>search</button>
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
                  <div className="aitem">
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
                        https://youtube.com
                      </a>
                    </div>
                    <div className="adetails">
                      <span className="aititle">Weekly average insight :</span>
                      <span className="aitext">125</span>
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
                <div className="abox-3 abox">3</div>
                <div className="abox-4 abox">
                  <span className="atitle">Globalized</span>
                  <div className="country-scroll">
                    <img src={gp} alt="" style={{width : "54px" , height : "54px"}} />
                    <img src={gp} alt="" style={{width : "54px" , height : "54px"}} />
                    <img src={gp} alt="" style={{width : "54px" , height : "54px"}} />
                    <img src={gp} alt="" style={{width : "54px" , height : "54px"}} />
                    <img src={gp} alt="" style={{width : "54px" , height : "54px"}} />
                    <img src={gp} alt="" style={{width : "54px" , height : "54px"}} />
                  </div>
                </div>
                <div className="abox-5 abox">5</div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Analytics;
