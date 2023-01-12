import logo from "../../images/gadgets.png";
import cartLogo from "../../images/cartLogo.png";
import menuLogo from "../../images/menuLogo.png";
import { StyledNavbar } from "./styledNavbar";
import { Link } from "react-router-dom";
import NavDrawer from "../NavDrawer";

const Navbar = () => {
  return (
    <StyledNavbar>
      {/* <img className="Menu Logo" src={menuLogo} alt="Menu button" /> */}
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
      <img className="Cart Logo" src={cartLogo} alt="Cart button" />
    </StyledNavbar>
  );
};

export default Navbar;
