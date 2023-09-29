import "./input.css";
const Input = ({ id, name, placeholder, label }) => {
  return (
    <>
      <div className="input-main d-grid">
        <label htmlFor={id}>{label}</label>
        <input type="text" name={name} id={id} placeholder={placeholder} />
      </div>
    </>
  );
};
export default Input;
