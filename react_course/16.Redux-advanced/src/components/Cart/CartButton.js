import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui";

const CartButton = (props) => {
  const sumOfCartItems = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={handleClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{sumOfCartItems}</span>
    </button>
  );
};

export default CartButton;
