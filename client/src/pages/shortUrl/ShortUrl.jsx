import { getUrlClose } from "./shortUrlSlice";
import Logo from "../../components/logo/Logo";
import { motion } from "framer-motion";
import "./shortUrl.css";
import { useState } from "react";

const ShortUrl = ({ urldata }) => {
  const [isCopied, setIsCopied] = useState(false);
  const copyUrl = async () => {
    await navigator.clipboard.writeText("Hello Async blue");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  const copyWhatsapp = () => {
    const url = "http://localhost:5173/";
    const sendLink = `https://wa.me/?text=${encodeURIComponent(url)}`;
    window.open(sendLink);
  };
  return (
    <>
      <div className="shortUrl-main">
        <Logo />
        <div className="shortUrl-heading">Now its Tiny...</div>
        <div className="shortUrl-url">http://localhost:3000/kl</div>
        <div className="shortUrl-share">
          <i
            className="fa-regular fa-copy fa-2xl"
            onClick={() => {
              copyUrl();
            }}
          ></i>
          <i
            className="fa-brands fa-whatsapp fa-2xl"
            onClick={copyWhatsapp}
          ></i>
        </div>
        {isCopied && (
          <>
            <motion.p
              className="shortUrl-copy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              copied!
            </motion.p>
          </>
        )}
        <div className="shortUrl-close">
          <i
            className="fa-solid fa-xmark fa-2xl"
            onClick={() => {
              dispatch(getUrlClose());
            }}
          ></i>
        </div>
      </div>
    </>
  );
};
export default ShortUrl;
