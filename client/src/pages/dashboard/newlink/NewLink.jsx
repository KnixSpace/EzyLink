import { getUrlOpen } from "../../shortUrl/shortUrlSlice";
import ShortUrl from "../../shortUrl/ShortUrl";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import "./newlink.css";
import { useDispatch, useSelector } from "react-redux";

const NewLink = ({ userData }) => {
  const { getUrl } = useSelector((store) => store.shortUrlPage);
  const dispatch = useDispatch();
  const [url, setUrl] = useState("");
  const [custom, setCustom] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const newPaid = {
    longUrl: url.trim(),
    custom: custom.trim(),
    email: userData.email,
  };

  const handelSubmit = async () => {
    if (url === "") {
      //enter your url please
      return;
    }
    const data = await fetch("http://localhost:3000/api/url/paid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPaid),
      credentials: "include",
    });

    const { shortUrl } = await data.json();
    setShortUrl(shortUrl);
    dispatch(getUrlOpen());
  };
  return (
    <>
      <AnimatePresence>
        {getUrl && <ShortUrl urldata={shortUrl} key={5} />}
        <div className="newlink-main">
          <span className="newlink-heading">
            Link transformation for limitless connections
          </span>
          <div className="newlink-input d-grid">
            <label htmlFor="nlurl">Enter Your Long Urls</label>
            <input
              className="newlink-lurl"
              type="text"
              id="nlurl"
              value={url}
              placeholder="https://ezylink.in/xyz/..."
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
          </div>
          <div className="newlink-custom">
            <div className="custom-label">Custom Url</div>
            <div className="custom-input flex-grow-1">
              <input
                type="text"
                placeholder="doc-ezylink"
                value={custom}
                onChange={(e) => {
                  setCustom(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="newlink-submit">
            <button onClick={handelSubmit}>Submit</button>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};
export default NewLink;
