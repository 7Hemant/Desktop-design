import person from "../assets/Lolla 1.png";

interface ReviewCard {
  name: String;
  company: String;
  star: Number;
  description: String;
}

const ReviewCard = ({ name, company, star, description }: ReviewCard) => {
  return (
    <div className="px-[48px] py-[36px] border-[.5px] border-[#7a319933] rounded-[10px] ">
      <div className="flex">
        <div>
          <img src={person} alt="" />
        </div>
        <div>
          <h1>{name}</h1>
          <h5>{company}</h5>
          <p>***** </p>
        </div>
      </div>
      <div className="">
        <p className="text-[12px] w-[369px]">{description}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
