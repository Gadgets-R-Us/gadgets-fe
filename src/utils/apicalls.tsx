export const fetchCategories = async () => {
  const response = await fetch("http://localhost:3001/");
  return response.json();
};
