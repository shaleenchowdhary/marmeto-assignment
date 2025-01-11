import Cart from './Cart';
import Details from './Details';

const Order = ({ products }) => {
  // console.log(products.items);
  return (
    <div className="flex flex-col md:flex-row w-full gap-y-4 lg:p-14 md:p-8 p-2 gap-x-5">
      <Details products={products.items} />
      <Cart products={products} />
    </div>
  );
};
export default Order;
