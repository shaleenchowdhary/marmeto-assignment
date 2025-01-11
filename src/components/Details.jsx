import { useEffect, useState } from 'react';

const Details = ({ products, updateTotalPrice, currencyFormat }) => {
  const [productsList, setProductsList] = useState(products.items);

  // Syncing productsList with latest products props
  useEffect(() => {
    setProductsList(products.items);
  }, [products.items]);

  // console.log(productsList ? productsList[0].final_price : 'hello');

  // updating total price on every change in the list of products
  useEffect(() => {
    const totalPrice =
      productsList &&
      productsList.reduce((sum, product) => sum + product.final_price, 0);

    totalPrice
      ? updateTotalPrice(currencyFormat(totalPrice))
      : updateTotalPrice('₹0.00');
  }, [productsList, updateTotalPrice, currencyFormat]);

  // Changing the quatity to user's input
  const handleQuantityChange = (productKey, newQuantity) => {
    const updatedList = productsList.map((product) => {
      return product.key === productKey
        ? {
            ...product,
            quantity: newQuantity,
            final_price: product.price * newQuantity,
          }
        : product;
    });
    setProductsList(updatedList);
  };

  // Removing the item from the productsList
  const handleRemove = (productKey) => {
    const updatedList = productsList.filter(
      (product) => product.key !== productKey
    );
    setProductsList(updatedList);
  };

  return (
    <div className="w-full md:w-[70%]">
      <table className="w-full text-xs md:text-base">
        <thead className="bg-[#faf3ea]">
          <tr>
            <th className="th-data">Product</th>
            <th className="th-data">Price</th>
            <th className="th-data">Quantity</th>
            <th className="th-data">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {productsList && productsList.length > 0 ? (
            productsList.map((product) => (
              <tr key={product.key}>
                <td className="tbody-data flex justify-start items-center gap-x-5 lg:flex-row flex-col">
                  <div className="md:w-24 md:h-24 w-12 h-12 overflow-hidden rounded-xl">
                    <img
                      className="w-full h-full object-cover"
                      src={product.image}
                      alt="Product"
                    />
                  </div>
                  <p className="text-gray-400">{product.title}</p>
                </td>

                <td className="tbody-data text-gray-400">
                  {currencyFormat(product.price)}
                </td>

                <td className="tbody-data">
                  <input
                    type="number"
                    value={product.quantity}
                    onChange={(e) =>
                      handleQuantityChange(product.key, Number(e.target.value))
                    }
                    className="px-3 py-1 w-16 border-2 rounded-md border-gray-400"
                  />
                </td>

                <td className="tbody-data">
                  <div className="flex items-center">
                    <span>{currencyFormat(product.final_price)}</span>
                    <button
                      className="text-[#b88e2f] text-xl ml-auto"
                      onClick={() => handleRemove(product.key)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No products to show</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default Details;
