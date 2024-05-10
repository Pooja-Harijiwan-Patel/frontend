const CustomButton = ({ title, containerStyles, iconRight, type,background, onClick }) => {
    return (
      <button
        onClick={onClick}
        type={type || "button"}
        background = {"#B711FF"}
        className={`inline-flex items-center text-base ${containerStyles}`}
      >
        {title}
  
        {iconRight && <div className='ml-2'>{iconRight}</div>}
      </button>
    );
  };
  
  export default CustomButton;