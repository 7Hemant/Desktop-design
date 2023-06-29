import person from "../assets/Lolla 1.png";
import { BsFillStarFill } from "react-icons/bs";
interface ReviewCard {
  name: String;
  company: String;
  star?: Number;
  description: String;
}

const ReviewCard = ({ name, company, description }: ReviewCard) => {
  return (
    <div
      className={` cursor-pointer px-[48px] py-[36px] border-[.5px] border-[#7a319933] rounded-[10px]  hover:shadow-2xl`}
    >
      <div className="flex">
        <div>
          <img src={person} alt="" />
        </div>
        <div className=" ml-[1.5rem]">
          <h1 className="font-bold">{name}</h1>
          <h5 className="text-[0.875rem]">{company}</h5>
          <div className="flex">
            <BsFillStarFill className="text-[yellow]" />
            <BsFillStarFill className="text-[yellow]" />
            <BsFillStarFill className="text-[yellow]" />
            <BsFillStarFill className="text-[yellow]" />
            <BsFillStarFill className="text-[yellow]" />
          </div>
        </div>
      </div>
      <div className="mt-[1.5rem]">
        <p className="text-[12px] w-[369px]">{description}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
