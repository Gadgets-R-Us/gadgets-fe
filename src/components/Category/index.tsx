import { TITem } from "../../containers/CategoryWrapper";

const Category = ({
  image,
  name,
  starCount,
  reviewCount,
  color,
  price,
}: TITem) => {
  return (
    <>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <div className="ItemReputation">
        <p>{starCount}</p>
        <p>{reviewCount}</p>
      </div>
      <p>{color}</p>
      <p>{price}</p>
    </>
  );
};
export default Category;
