import "../../styles/Input.css";

const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  name,
  className = "",
}) => {
  return (
    <div className={`input-container ${className}`}>
      {/* Label */}
      {label && <label className="input-label">{label}</label>}

      {/* Input */}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`input-field ${error ? "input-error" : ""}`}
      />

      {/* Error */}
      {error && <p className="input-error-text">{error}</p>}
    </div>
  );
};

export default Input;
