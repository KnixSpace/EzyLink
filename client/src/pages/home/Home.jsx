import Input from "../../components/input/input";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home-nav d-flex">
        <div className="flex-grow-1 home-logo">EzyLink</div>
        <div className="home-button">
          <button className="border-0">Login</button>
          <button className="signup">Sign Up Free</button>
        </div>
      </div>
      <div className="home-main container-sm container-lg d-flex flex-column">
        <div className="home-heading">Shorten Your URLs</div>
        <Input
          placeholder={"https://ezylink.in/xyz/..."}
          id={"iurl"}
          label={"Enter Your Long Urls"}
          name={"LongUrl"}
        />
        <button>Submit</button>
      </div>
    </>
  );
};
export default Home;
