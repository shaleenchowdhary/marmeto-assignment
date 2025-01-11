let links = [
  {
    name: 'High Quality',
    description: 'Crafted from top materials',
    icon: 'assets/trophy.svg',
  },
  {
    name: 'Warrantly Protection',
    description: 'Over 2 years',
    icon: 'assets/guarantee.svg',
  },
  {
    name: 'Free Shipping',
    description: 'Order over $150',
    icon: 'assets/shipping.svg',
  },
  {
    name: '24/7 Support',
    description: 'Dedicated support',
    icon: 'assets/customer-support.svg',
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#faf3ea] w-full md:py-10 py-4 px-2 md:px-10">
      <nav className="w-full">
        <ul className="w-full flex-col gap-y-4 lg:flex-row flex justify-between items-center">
          {links.map((link) => {
            return (
              <li key={link.name} className="text-xs md:text-xl w-full">
                <div className="flex gap-x-2 justify-start items-center">
                  <div className="h-8 w-8">
                    <img className="h-full w-full" src={link.icon} alt="icon" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">{link.name}</p>
                    <p className="md:text-sm">{link.description}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
};
export default Footer;
