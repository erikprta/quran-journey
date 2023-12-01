const Input = ({ className, ...props }) => {
    return (
      <input
        className={`border border-slate-300 hover:border-slate-400 text-sm rounded-lg block w-full py-2.5 px-3 focus:border-green-500 outline-none transition ${
          className ? "" : ""
        }`}
        {...props}/>
    );
  };
  
  export default Input;