import "../../styles/Button.css";

const Button = ({
  children,
  type = "button",
  variant = "primary", // primary | secondary
  disabled = false,
  loading = false,
  onClick,
  className = "",
}) => {
  return (
    <button
      type={type}
      className={`btn ${variant} ${className} ${
        disabled || loading ? "disabled" : ""
      }`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
