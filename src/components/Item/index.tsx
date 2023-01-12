import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { StyledItem } from "./styledItem";
const Item = () => {
  const location = useLocation();
  //destructuring location.state.item below which is coming from Link's state
  const params = location.state.item;
  const { cart, setCart } = useContext<any>(CartContext);
  const specs = params.specifications.map((spec: string) => {
    return <li key={spec}>{spec}</li>;
  });

  const handleClick = () => {
    setCart([
      ...cart,
      {
        id: cart.length + 1,
        item: params.name,
        image: params.image,
        color: params.color,
        price: params.price,
      },
    ]);
  };

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
      <button onClick={handleClick}>Add to Cart</button>
    </StyledItem>
  );
};
export default Item;
