import { useEffect, useState } from "react";
import { fetchCategory } from "../../utils/apicalls";

const CategoryWrapper = (category: any) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCategory(category.category);
      setList(data.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>{category.category}</h1>
      <select>
        <option>--Sort By--</option>
      </select>
    </>
  );
};
export default CategoryWrapper;
