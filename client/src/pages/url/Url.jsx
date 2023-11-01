import Limit from "../../components/Limit/Limit";
import validateUrl from "../../validations/urlValidator";
import ShortUrl from "../shortUrl/ShortUrl";
import { getUrlOpen } from "../shortUrl/shortUrlSlice";
import { openLimit } from "../../components/Limit/limitSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import lPage from "../../assets/landing-page.png";
import "./url.css";

const Url = () => {
  const { getUrl } = useSelector((store) => store.shortUrlPage);
  const { isLimit } = useSelector((store) => store.limitPage);
  const dispatch = useDispatch();
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [urlError, setUrlError] = useState("");
  const newFree = {
    longUrl: url.trim(),
  };

  const handelSubmit = async () => {
    const validError = validateUrl(url.trim());
    if (validError) {
      setUrl("");
      setUrlError("Please enter valid Url");
      return;
    }

    const res = await fetch(import.meta.env.VITE_URL_FREE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFree),
      credentials: "include",
    });

    const data = await res.json();
    if (data?.error) {
      dispatch(openLimit());
      return;
    }
    const { shortUrl } = data;
    setShortUrl(shortUrl);
    dispatch(getUrlOpen());
  };

  return (
    <>
      <AnimatePresence>
        <div className="url-short">
          {getUrl && <ShortUrl urldata={shortUrl} key={5} />}
        </div>
        <div className="url-container" key={6}>
          <div className="url-shortner">
            <span className="url-heading">
              <span>
                Super Charge Your Links: <br /> Boost Clicks, Engagement, and
                <span className="highlight"> Conversations!</span>
              </span>
              <span className="url-slogan">Your Link to Online Triumph!</span>
            </span>
            <div className="url-input">
              <label htmlFor="lurl">Enter Your Long Urls</label>
              <input
                type="text"
                id="lurl"
                placeholder="https://ezylink.in/xyz..."
                value={url ? url : urlError}
                onFocus={() => {
                  setUrlError("");
                }}
                onChange={(e) => {
                  setUrl(e.target.value);
                }}
                style={{
                  color: urlError ? "#cc0016" : "",
                  backgroundColor: urlError ? "#ffe6e9" : "#e3effb",
                }}
              />
            </div>
            <button
              className="url-input-button"
              role="submit"
              onClick={() => {
                handelSubmit();
              }}
            >
              submit
            </button>
            {isLimit && <Limit key={7} />}
          </div>
          <div className="url-illustration">
            <img src={lPage} alt="" />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};
export default Url;
