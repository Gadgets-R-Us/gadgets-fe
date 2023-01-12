import { createContext, useState } from "react";

export interface ICartItem {
  id?: number;
  item: string;
  image: string;
  color: string;
  price: number;
}

export interface ICartContext {
  cart: ICartItem[];
  setCart: Function;
}

const defaultContext = {
  cart: [],
  setCart: () => {},
};

export const CartContext = createContext<ICartContext>(defaultContext);
const Cart = ({ children }: any) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default Cart;
