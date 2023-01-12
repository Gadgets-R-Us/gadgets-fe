import { useEffect, useState } from "react";
import Category from "../../components/Category";
import { fetchCategory } from "../../utils/apicalls";
import { StyledCategoryWrapper } from "./styledCategoryWrapper";

export type TItem = {
  id?: number;
  image: string;
  name: string;
  starCount: number;
  reviewCount: number;
  color: string;
  price: number;
  item: any;
  // item: TItemDetails;
};

// export type TItemDetails = TItem & {
//   specifications: string[];
//   longDescription: string;
// };

const CategoryWrapper = (category: any) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCategory(category.category);
      setList(data.data);
    };
    fetchData();
  }, [list]);

  const allItems = list.map((item: TItem) => {
    // console.log(item, "<<item");
    return (
      <Category
        key={item.id}
        image={item.image}
        name={item.name}
        starCount={item.starCount}
        reviewCount={item.reviewCount}
        color={item.color}
        price={item.price}
        item={item}
      />
    );
  });

  return (
    <StyledCategoryWrapper>
      <div className="Subheader">
        <h2>{category.category}</h2>
        <select>
          <option>--Sort By--</option>
        </select>
      </div>
      <div className="Items">{allItems}</div>
    </StyledCategoryWrapper>
  );
};

export default CategoryWrapper;
