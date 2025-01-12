const Hero = () => {
  return (
    <div className="bg-custom-bg bg-cover bg-center w-full h-80 flex flex-col justify-center items-center">
      <div className="w-14 h-auto">
        <img
          src="/assets/logo.svg"
          className="h-full w-full object-contain"
          alt=""
        />
      </div>
      <p className="text-5xl font-medium py-4">Cart</p>
      <p className="text-base">
        <span className="font-medium">Home</span>
        <i className="px-1 fa-solid fa-angle-right"></i> Cart
      </p>
    </div>
  );
};
export default Hero;
