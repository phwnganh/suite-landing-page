
const CustomButton = ({children, className}) => {
    return (
        <button className={`text-preset-6 leading-preset-6 tracking-preset-6 font-preset-6 rounded-6 border  px-6 pt-4 pb-3 ${className}`}>
            {children}
        </button>
    );
};

export default CustomButton;