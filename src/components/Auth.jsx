import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { login } from "../Store/auth";

const Auth = () => {
  const dispatch = useDispatch();

  function handleForm(e) {
    e.preventDefault();
    dispatch(login());
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleForm}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button onClick={handleForm}>
            Login
          </button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
