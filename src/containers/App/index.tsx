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
          element={<CategoryWrapper category="Drones" />}
        ></Route>

        <Route
          path="/scooters"
          element={<CategoryWrapper category="Scooters" />}
        ></Route>

        <Route
          path="/consoles"
          element={<CategoryWrapper category="Consoles" />}
        ></Route>

        <Route path="/" element={<CategoriesWrapper />}></Route>
      </Routes>
    </div>
  );
};

export default App;
