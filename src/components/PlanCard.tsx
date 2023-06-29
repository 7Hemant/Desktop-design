import React from "react";

interface PlanCard {
  heading: String;
  description: String;
  price: number;
  features: String[];
  buttonTitle: String;
}

const PlanCard = ({
  heading,
  description,
  price,
  features,
  buttonTitle,
}: PlanCard) => {
  return (
    <div
      className={`z-50 border rounded-[10px] border-[#7A3199] py-[35px] px-[27px] space-y-[24px]  ${
        heading === "Premium Plan" ? "bg-[#7A3199] text-[#eee] " : " bg-[#fff]"
      }`}
    >
      <h1 className="font-bold">{heading}</h1>
      <p className="w-[264px] text-[12px]"> {description}</p>
      <h1
        className={`text-[2rem] font-bold flex items-center ${
          heading === "Premium Plan" ? "  text-[#eee]  " : " text-[#7A3199] "
        } `}
      >
        $ {price} <span className="text-[14px] pl-4 italic">/ month</span>
      </h1>
      <ol className="list-disc pl-4">
        {features.map((item) => (
          <li className=" font-bold text-[12px]">{item}</li>
        ))}
      </ol>
      <button
        className={` border  text-[12px] text-[#7A3199] py-[12px] px-[32px] rounded-[10px] ${
          heading === "Premium Plan"
            ? "border-[#eee]  bg-[#eee]  "
            : " border-[#7A3199] "
        }`}
      >
        {buttonTitle}
      </button>
    </div>
  );
};

export default PlanCard;
