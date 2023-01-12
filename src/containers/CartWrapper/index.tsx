import { useContext } from "react";
import CartItem from "../../components/CartItem";
import { CartContext, ICartContext } from "../../contexts/CartContext";
import { StyledCartWrapper } from "./styledCartWrapper";

const CartWrapper = () => {
  const { cart, setCart } = useContext<ICartContext>(CartContext);
  console.log(cart, "CartContext");

  const allItems = cart.map((item) => {
    return (
      <CartItem
        key={item.id}
        item={item.item}
        image={item.image}
        color={item.color}
        price={item.price}
      />
    );
  });

  return (
    <StyledCartWrapper>
      <h2 className="Header">Cart</h2>
      {allItems}
      <div className="CartSection">
        <h3>Subtotal</h3>
        <h3>$</h3>
      </div>
      <div className="CartSection">
        <h3>Shipping</h3>
        <h3>$</h3>
      </div>
      <div className="CartSection">
        <h3>Total (USD)</h3>
        <h3>$</h3>
      </div>
      <button className="Checkout">Checkout</button>
    </StyledCartWrapper>
  );
};
export default CartWrapper;
