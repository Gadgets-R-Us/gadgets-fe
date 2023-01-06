import logo from "../../images/gadgets.png";
import cartLogo from "../../images/cartLogo.png";
import menuLogo from "../../images/menuLogo.png";

const Navbar = () => {
  return (
    <header className="Navbar">
      <img className="Menu Logo" src={menuLogo} alt="Menu button" />
      <img
        className="App Logo"
        src={logo}
        alt="Website's logo of a phone, watch, laptops"
      />
      <h1>Gadgets R Us</h1>
      <img className="Cart Logo" src={cartLogo} alt="Cart button" />
    </header>
  );
};

export default Navbar;
