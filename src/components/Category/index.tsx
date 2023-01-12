import { TItem } from "../../containers/CategoryWrapper";
import { StyledCategory } from "./styledCategory";
import { Link } from "react-router-dom";
import { handleAddToCart } from "../../utils";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Category = ({
  image,
  name,
  starCount,
  reviewCount,
  color,
  price,
  item,
}: TItem) => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <StyledCategory>
      <Link
        to={`/item/${name.split(" - ")[1].split(" ").join("_")}`}
        state={{ item: item }}
      >
        <img className="ItemImage" src={image} alt={name} />
        <h2>{name}</h2>
      </Link>
      <div className="ItemReputation">
        <p>{starCount}</p>
        <p>({reviewCount})</p>
      </div>
      <p>Color: {color}</p>
      <p>${price}</p>
      <button onClick={() => handleAddToCart(cart, setCart, item)}>
        Add to Cart
      </button>
    </StyledCategory>
  );
};
export default Category;
