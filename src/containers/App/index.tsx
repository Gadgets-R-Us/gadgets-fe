import Navbar from "../../components/Navbar";
// import "./styledApp.tsx";
import CategoriesWrapper from "../CategoriesWrapper";
import { Route, Routes } from "react-router-dom";
import CategoryWrapper from "../CategoryWrapper";
import Item from "../../components/Item";
import { StyledApp } from "./styledApp";
import CartWrapper from "../CartWrapper";

const App = () => {
  return (
    <StyledApp>
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

        <Route path="/cart" element={<CartWrapper />}></Route>

        <Route path="/item/:name" element={<Item />}></Route>

        <Route path="/" element={<CategoriesWrapper />}></Route>
      </Routes>
    </StyledApp>
  );
};

export default App;
