import { TItem } from "../../containers/CategoryWrapper";
import { StyledCategory } from "./styledCategory";
import { Link } from "react-router-dom";

const Category = ({
  image,
  name,
  starCount,
  reviewCount,
  color,
  price,
  item,
}: TItem) => {
  return (
    <Link
      to={`/item/${name.split(" - ")[1].split(" ").join("_")}`}
      state={{ item: item }}
    >
      <StyledCategory>
        <img className="ItemImage" src={image} alt={name} />
        <h2>{name}</h2>
        <div className="ItemReputation">
          <p>{starCount}</p>
          <p>({reviewCount})</p>
        </div>
        <p>Color: {color}</p>
        <p>${price}</p>
      </StyledCategory>
    </Link>
  );
};
export default Category;
