import LiveTvIcon from "@mui/icons-material/LiveTv";
import { StyledCartItem } from "./styledCartItem";
const CartItem = () => {
  return (
    <StyledCartItem>
      <div className="CartItemInfo">
        <LiveTvIcon />
        <div className="CartItemDetails">
          <h3>title{}</h3>
          <h3>Color: {}</h3>
          <button>remove</button>
        </div>
      </div>
      <div className="CartItemValues">
        <div className="ItemPrice">
          <h3>Price</h3>
          <h3>$1000{}</h3>
        </div>
        <select className="ItemQuantity">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <div className="ItemTotal">
          <h3>Total</h3>
          <h3>$1000{}</h3>
        </div>
      </div>
    </StyledCartItem>
  );
};
export default CartItem;
