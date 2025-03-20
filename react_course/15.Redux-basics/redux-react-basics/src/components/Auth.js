import { useDispatch } from 'react-redux';
import classes from './Auth.module.css';
import { authentication } from "../store/auth";

const Auth = () => {
  const dispatch = useDispatch();

  const handleLogIn = (event) => {
    event.preventDefault()
    logIn()
  }

  const logIn = () => {
    dispatch(authentication.logIn());
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleLogIn}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
