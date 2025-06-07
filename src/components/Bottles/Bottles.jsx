import React, { use, useEffect, useState } from "react";
import "./Bottles.css";
import Cart from "../Cart/cart";
import Bottle from "../Bottle/bottle";
import {
  addToStoredCart,
  getStoreCart,
  removeFromCart,
} from "../../utilities/localStorage";

const Bottles = ({ bottlesPromise }) => {
  const [cart, setCart] = useState([]);
  const bottles = use(bottlesPromise);

  //useEffect
  useEffect(() => {
    const storedCartIDs = getStoreCart();
    // console.log(storedCartIDs);

    const storedCart = [];

    for (const id of storedCartIDs) {
      //   console.log(id);

      const cartBottle = bottles.find((bottle) => bottle.id === id);

      if (cartBottle) {
        storedCart.push(cartBottle);
      }
    }

    setCart(storedCart);
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    // console.log("Bottles will be added to the cart", bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);

    // save the bottle id in the storage
    addToStoredCart(bottle.id);
  };

  const handleRemoveFromCart = (id) => {
    console.log("remove item form the cart", id);

    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
    removeFromCart(id);
  };
  //   console.log(bottles)

  return (
    <div>
      <h3>Bottles: {bottles.length}</h3>
      <p>Added to cart: {cart.length}</p>

      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>

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
