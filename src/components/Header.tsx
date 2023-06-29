const Header = () => {
  return (
    <header className="flex justify-between items-center capitalize h-[5rem] text-[#fff]">
      <div>logo</div>
      <nav>
        <ul className="flex space-x-[117px] items-center">
          <li>About</li>
          <li>Pricing</li>
          <li>Review</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
