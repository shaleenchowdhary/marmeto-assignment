import { Link } from 'react-router-dom';

const Cart = ({ totalPrice }) => {
  return (
    <div className="w-full md:w-[30%] bg-[#faf3ea] pt-4 pb-8">
      <p className="lg:text-3xl text-2xl font-medium">Cart Totals</p>
      <div className="lg:w-4/6 w-5/6 mx-auto py-8 text-sm md:text-base font-semibold">
        <div className="w-full flex justify-between items-center">
          <p>Subtotal</p>
          <p className="text-gray-400">{totalPrice}</p>
        </div>
        <div className="w-full flex justify-between items-center">
          <p>Total</p>
          <p className="text-[#b88e2f] lg:text-2xl text-xl">{totalPrice}</p>
        </div>
      </div>
      {/* <button className="border-[1px] cursor-pointer border-black px-10 lg:px-16 py-2 rounded-2xl text-xl">
        Check Out
      </button> */}
      <Link to="/checkout">
        <button className="border-[1px] cursor-pointer border-[#b88e2f] px-10 lg:px-16 py-2 rounded-2xl text-xl bg-gradient-to-r from-[white] to-[#b88e2f] active:scale-95 active:transform active:translate-y-1 transition-all duration-200 ease-in-out shadow-lg">
          Check Out
        </button>
      </Link>
    </div>
  );
};
export default Cart;
