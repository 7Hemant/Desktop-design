const Header = () => {
  return (
    <header className="flex justify-between items-center capitalize h-[5rem] text-[#fff]">
      <div className="font-bold">logo</div>
      <nav>
        <ul className="flex space-x-[117px] items-center">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#price">Pricing</a>
          </li>
          <li>
            <a href="#review">Review</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
