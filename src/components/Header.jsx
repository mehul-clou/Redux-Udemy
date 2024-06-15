import { logout } from "../Store/auth";
import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            {isAuthenticated ? (
              <button onClick={handleLogout}>logout</button>
            ) : (
              <button>login</button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
