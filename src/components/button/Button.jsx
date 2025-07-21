import "./button.css";

function Button({ className, children }) {
  return (
    <button className={`${className} btn text-white rounded-md transition `}>
      {children}
    </button>
  );
}

export default Button;
