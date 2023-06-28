interface Button {
  label: String;
}

const Button = ({ label }: Button) => {
  return (
    <button className="px-[3.5rem] py-[1.62rem] rounded-[10px] bg-gradient-to-r from-[#4776E6] to-[#8E54E9] text-[1.2rem] text-[#fff] font-bold">
      {label}
    </button>
  );
};

export default Button;
