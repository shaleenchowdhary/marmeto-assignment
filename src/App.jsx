import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Order from './components/Order';
import { useEffect } from 'react';
import Checkout from './components/Checkout';
const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        'https://cdn.shopify.com/s/files/1/0883/2188/4479/files/apiCartData.json?v=1728384889'
      );
      const data = await response.json();
      // console.log(data.items);
      // console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <Router>
      <div className="h-full">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Order products={products} />
              </>
            }
          ></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};
export default App;
