import { useEffect, useState } from 'react';
import Cart from './Cart';
import Details from './Details';

const Order = ({ products }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [productCurrency, setCurrency] = useState(products.currency);

  useEffect(() => {
    setCurrency(products.currency);
  }, [products.currency]);

  // console.log(products);

  const updateTotalPrice = (newTotal) => {
    setTotalPrice(newTotal);
  };

  // // Currency Formatting
  function currencyFormat(amount) {
    return new Intl.NumberFormat(productCurrency, {
      style: 'currency',
      currency: productCurrency,
      minimumFractionDigits: 2,
    }).format(amount);
  }

  return (
    <div className="flex flex-col md:flex-row w-full gap-y-4 lg:p-14 md:p-8 p-2 gap-x-5">
      <Details
        products={products}
        updateTotalPrice={updateTotalPrice}
        currencyFormat={currencyFormat}
      />
      <Cart totalPrice={totalPrice} />
    </div>
  );
};
export default Order;
