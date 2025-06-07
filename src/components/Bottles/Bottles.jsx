import React, { use, useState } from "react";
import "./Bottles.css";
import Bottle from "../Bottle/bottle";

const Bottles = ({ bottlesPromise }) => {
  const [cart, setCart] = useState([]);
  const bottles = use(bottlesPromise);

  const handleAddToCart = (bottle) => {
    // console.log("Bottles will be added to the cart", bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
  };

  //   console.log(bottles)

  return (
    <div>
      <h3>Bottles: {bottles.length}</h3>
      <p>Added to cart: {cart.length}</p>

      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handleAddToCart={handleAddToCart}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
