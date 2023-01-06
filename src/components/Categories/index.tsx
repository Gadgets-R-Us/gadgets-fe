import { TCategories } from "../../containers/CategoriesWrapper";
import { StyledCategories } from "./styledCategories";
import { Link } from "react-router-dom";

const Categories = ({ category, profilePicture, description }: TCategories) => {
  return (
    <StyledCategories>
      <img
        className="CategoriesImage"
        src={profilePicture}
        alt={`Main graphic for ${category}`}
      />
      <h2 className="CategoriesDescription">{description}</h2>
      <Link to={`/${category.toLowerCase()}`}>
        <button className="ShopAll Button">{`Shop All ${category}`}</button>
      </Link>
    </StyledCategories>
  );
};

export default Categories;
