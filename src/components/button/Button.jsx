function Button({ className, children }) {
  return (
    <button
      className={`${className} btn text-white rounded-md transition w-full sm:w-[194px] h-[60px] flex justify-center items-center`}
    >
      {children}
    </button>
  );
}

export default Button;
