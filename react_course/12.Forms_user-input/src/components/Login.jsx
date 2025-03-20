import { useRef, useState } from "react";

export default function Login() {
  const [formIsInvalid, setFormIsInvalid] = useState(false);

  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsInvalid = !enteredEmail.includes(".cz");

    if (emailIsInvalid) {
      setFormIsInvalid(true);
      return;
    } else setFormIsInvalid(false);

    console.log(enteredEmail, enteredPassword)
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} defaultValue={"test@google.cz"} />
          <div className="control-error">
            {formIsInvalid && <p>Please enter a valid email adress.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
}
