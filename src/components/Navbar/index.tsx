import logo from "../../images/gadgets.png";
import cartLogo from "../../images/cartLogo.png";
import { StyledNavbar } from "./styledNavbar";
import { Link } from "react-router-dom";
import NavDrawer from "../NavDrawer";

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavDrawer />
      <Link to="/">
        <div className="AppInfo">
          <img
            className="App Logo"
            src={logo}
            alt="Website's logo of a phone, watch, laptops"
          />
          <h1>Gadgets R Us</h1>
        </div>
      </Link>
      <Link to="/cart">
        <img className="Cart Logo" src={cartLogo} alt="Cart button" />
      </Link>
    </StyledNavbar>
  );
};

export default Navbar;
