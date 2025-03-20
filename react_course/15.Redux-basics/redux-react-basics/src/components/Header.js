import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import { authentication } from "../store/auth";

const Header = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(authentication.logOut());
  };

  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isLoggedIn && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logOut}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
