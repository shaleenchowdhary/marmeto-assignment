const Header = () => {
  return (
    <div className="flex md:py-6 md:px-12 py-3 px-5 justify-between items-center">
      <div className="logo flex items-center gap-x-1">
        <img src="assets/logo.svg" alt="logo" />
        <p className="font-bold text-base md:text-3xl">Marmeto</p>
      </div>
      <nav className="hidden justify-center gap-x-7 lg:gap-x-20 items-center text-base font-semibold flex-grow md:flex">
        <div>Home</div>
        <div>Shop</div>
        <div>About</div>
        <div>Contact</div>
      </nav>
      <div className="flex gap-x-6 md:gap-x-8 md:text-xl lg:text-2xl">
        <div>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div>
          <i className="fa-regular fa-heart"></i>
        </div>
        <div>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <div className="md:hidden">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
};
export default Header;
