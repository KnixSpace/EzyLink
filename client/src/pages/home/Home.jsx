import { openLimit } from "../../components/Limit/limitSlice";
import { getUrlOpen } from "../shortUrl/shortUrlSlice";
import ShortUrl from "../shortUrl/ShortUrl";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Limit from "../../components/Limit/Limit";
import validateUrl from "../../validations/urlValidator";
import { AnimatePresence } from "framer-motion";
import "./home.css";

const Home = () => {
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

    const res = await fetch("http://localhost:3000/api/url/free", {
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
        {getUrl && <ShortUrl urldata={shortUrl} key={5} />}
        <div
          className="home-main d-flex container-sm container-lg flex-column"
          key={6}
        >
          <div className="home-heading">Shorten Your URLs</div>
          <div className="home-input d-grid">
            <label htmlFor="lurl">Enter Your Long Urls</label>
            <input
              type="text"
              value={url ? url : urlError}
              id="lurl"
              placeholder="https://ezylink.in/xyz/..."
              onChange={(e) => {
                setUrl(e.target.value);
              }}
              onFocus={() => {
                setUrlError("");
              }}
              style={{
                color: urlError ? "#cc0016" : "",
                backgroundColor: urlError ? "#ffe6e9" : "#e3effb",
              }}
            />
          </div>
          <button
            role="submit"
            onClick={() => {
              handelSubmit();
            }}
          >
            Submit
          </button>
        </div>
        {isLimit && <Limit key={7} />}
      </AnimatePresence>
    </>
  );
};
export default Home;
