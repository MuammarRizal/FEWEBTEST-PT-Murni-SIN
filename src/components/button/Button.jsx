import "./button.css";

function Button({ className, children }) {
  return (
    <button
      className={`${className} btn text-white rounded-md transition !w-full sm:!w-auto`}
    >
      {children}
    </button>
  );
}

export default Button;
