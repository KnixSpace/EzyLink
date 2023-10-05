import { getUrlOpen } from "../shortUrl/shortUrlSlice";
import ShortUrl from "../shortUrl/ShortUrl";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./home.css";

const Home = () => {
  const { getUrl } = useSelector((store) => store.shortUrlPage);
  const dispatch = useDispatch();
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const newFree = {
    longUrl: url,
  };

  const handelSubmit = async () => {
    const res = await fetch("http://localhost:3000/api/url/free", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFree),
      credentials: "include",
    });

    const { shortUrl } = await res.json();
    setShortUrl(shortUrl);
    dispatch(getUrlOpen());
  };

  return (
    <>
      {getUrl && <ShortUrl urldata={shortUrl} />}
      <div className="home-main container-sm container-lg d-flex flex-column">
        <div className="home-heading">Shorten Your URLs</div>
        <div className="home-input d-grid">
          <label htmlFor="lurl">Enter Your Long Urls</label>
          <input
            type="text"
            value={url}
            id="lurl"
            placeholder="https://ezylink.in/xyz/..."
            onChange={(e) => {
              setUrl(e.target.value);
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
    </>
  );
};
export default Home;
