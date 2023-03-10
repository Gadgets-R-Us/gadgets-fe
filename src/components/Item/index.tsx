import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ICartContext, CartContext } from "../../contexts/CartContext";
import { handleAddToCart } from "../../utils";
import { StyledItem } from "./styledItem";
const Item = () => {
  const location = useLocation();
  //destructuring location.state.item below which is coming from Link's state
  const params = location.state.item;
  const { cart, setCart } = useContext<ICartContext>(CartContext);
  const specs = params.specifications.map((spec: string) => {
    return <li key={spec}>{spec}</li>;
  });

  return (
    <StyledItem>
      <img className="ItemImage" src={params.image} alt={params.name} />
      <h2>{params.name}</h2>
      <div className="ItemMain">
        <p>{params.starCount}</p>
        <h2>{params.price}</h2>
      </div>
      <p>{params.reviewCount}</p>
      <h2>About this Item</h2>
      <h3>{params.longDescription}</h3>
      <h2>Specifications</h2>
      <ul className="SpecList">{specs}</ul>
      <button onClick={() => handleAddToCart(cart, setCart, params)}>
        Add to Cart
      </button>
    </StyledItem>
  );
};
export default Item;
