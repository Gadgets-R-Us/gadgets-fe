import logo from "../../images/gadgets.png";
import cartLogo from "../../images/cartLogo.png";
import menuLogo from "../../images/menuLogo.png";
import { StyledNavbar } from "./styledNavbar";

const Navbar = () => {
  return (
    <StyledNavbar>
      <img className="Menu Logo" src={menuLogo} alt="Menu button" />
      <img
        className="App Logo"
        src={logo}
        alt="Website's logo of a phone, watch, laptops"
      />
      <h1>Gadgets R Us</h1>
      <img className="Cart Logo" src={cartLogo} alt="Cart button" />
    </StyledNavbar>
  );
};

export default Navbar;
