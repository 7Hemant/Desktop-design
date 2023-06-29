import { BsFacebook, BsYoutube } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-between items-center border-t border-[#fff] text-[#fff] mt-9 pt-5 px-4">
      <div>
        <h1>All Right Reserved @Copyright 2023</h1>
      </div>
      <div className="flex">
        <ul className="flex items-center space-x-4  text-[12px]">
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Product</li>
        </ul>
        <ul className="ml-4 flex space-x-4">
          <li>
            <BsFacebook />{" "}
          </li>
          <li>
            <BsYoutube />
          </li>
          <li>
            <BiLogoInstagramAlt />
          </li>
          <li>
            <FaTwitter />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
