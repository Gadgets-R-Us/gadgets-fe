import Navbar from "../../components/Navbar";
import "../App/styles.css";
import CategoriesWrapper from "../CategoriesWrapper";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <CategoriesWrapper />
    </div>
  );
};

export default App;
