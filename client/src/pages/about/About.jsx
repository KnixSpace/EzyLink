import "./about.css";
const About = () => {
  return (
    <>
      <div className="about-main">
        <div className="about-container">
          <div className="about-heading">
            <span>About</span>
            <span className="about-brand">Ezylink</span>
          </div>
          <div className="about-details">
            <span className="about-title">Introduction:</span>
            <span className="about-text">
              Welcome to EzyLink, the URL shortening service that makes sharing
              long and cumbersome URLs easier and more convenient. We're
              dedicated to simplifying the way you share links, and we'd like to
              tell you a little more about who we are and what we stand for.
            </span>
          </div>
          <div className="about-details">
            <span className="about-title">Our Mission:</span>
            <span className="about-text">
              At EzyLink, our mission is simple: to provide you with a fast,
              reliable, and user-friendly platform for shortening URLs. We want
              to make the process of sharing links as straightforward as
              possible, saving you time and effort.
            </span>
          </div>
          <div className="about-details">
            <span className="about-title">Our Team:</span>
            <span className="about-text">
              EzyLink was founded and is entirely developed by a single
              individual - me. I am passionate about enhancing your online
              experience and have designed and implemented every aspect of this
              service, including the recent addition of link analytics for
              logged-in users.
            </span>
          </div>
          <div className="about-details">
            <span className="about-title">Why Choose EzyLink:</span>
            <ul className="about-text">
              <li>
                <span>Easy-to-Use:</span> We designed EzyLink with simplicity in
                mind. Just paste your long URL, and with a single click, you'll
                have a shortened link ready to share.
              </li>
              <li>
                <span>Reliability:</span> EzyLink offers a dependable and robust
                service. Our short links are designed to last and are backed by
                reliable infrastructure.
              </li>
              <li>
                <span>Privacy:</span> We respect your privacy. EzyLink doesn't
                sell or misuse your data in any way. Your trust and data
                security are paramount to me.
              </li>
              <li>
                <span>Customization:</span> EzyLink provides options for
                customizing your short links to match your branding or message.
              </li>
              <li>
                <span>Link Analytics:</span> For our logged-in users, I'm proud
                to announce that I've recently implemented link analytics. You
                can now track and analyze the performance of your short links
                with detailed insights, helping you make informed decisions on
                your sharing strategies.
              </li>
            </ul>
          </div>
          <div className="about-details">
            <span className="about-title">Connect Us:</span>
            <span className="about-text">
              I value your feedback and inquiries. If you have any questions,
              suggestions, or concerns, please don't hesitate to get in touch
              with me. You can reach out through by emailing me directly at
              <a href="developer.ezylink@gmail.com">
                developer.ezylink@gmail.com
              </a>
            </span>
          </div>
          <span className="about-text">
            Thank you for choosing EzyLink for your URL shortening needs. I am
            committed to delivering a top-quality service and ensuring your
            experience with EzyLink is exceptional. Your trust in my platform is
            greatly appreciated, and I look forward to serving you.
          </span>
        </div>
      </div>
    </>
  );
};
export default About;
