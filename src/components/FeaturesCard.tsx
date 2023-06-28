interface FeaturesCard {
  heading: String;
  description: String;
}

const FeaturesCard = ({ heading, description }: FeaturesCard) => {
  return (
    <div className="border border-[#7A3199] rounded-[10px] p-[30px] ">
      <h1 className="text-[20px] font-bold">{heading}</h1>
      <p className="w-[208px] text-[12px]">{description}</p>
    </div>
  );
};

export default FeaturesCard;
