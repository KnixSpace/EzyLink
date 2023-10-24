import "./flag.css";
const Flag = ({ flagImg }) => {
  return (
    <div className="flag-img">
      <img src={flagImg} alt="" />
    </div>
  );
};
export default Flag;
