import { createContext, useState } from "react";
const defaultContext = {
  cart: [],
  setCart: () => {},
};

export const CartContext = createContext<any>(defaultContext);
const Cart = ({ children }: any) => {
  const [cart, setCart] = useState([]);

  console.log(cart, "cartContext");
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default Cart;
