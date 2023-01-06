import Navbar from "../../components/Navbar";
import "../App/styles.css";
import CategoriesWrapper from "../CategoriesWrapper";
import { Route, Routes } from "react-router-dom";
import CategoryWrapper from "../CategoryWrapper";

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/drones"
          element={<CategoryWrapper category="drones" />}
        ></Route>
        {/* <Route path="/scooters" element={<CategoryWrapper />}></Route>
        <Route path="/consoles" element={<CategoryWrapper />}></Route> */}

        <Route path="/" element={<CategoriesWrapper />}></Route>
      </Routes>
    </div>
  );
};

export default App;
