import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function StateLogin() {
  // EMAIL Input
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    handleInputFocus: handleEmailFocus,
    hasError: emailHasError,
    setEnteredValue: setEmailValue,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  // Password Input
  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    handleInputFocus: handlePasswordFocus,
    hasError: passwordHasError,
    setEnteredValue: setPasswordValue,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();

    console.log(emailValue, passwordValue);

    if (passwordHasError || emailHasError) {
      return;
    }

    setEmailValue("");
    setPasswordValue("");
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h2>Login</h2>
      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onFocus={handleEmailFocus}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && "Please enter a valid email."}
          required
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onFocus={handlePasswordFocus}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordHasError && "Please enter a valid password."}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat" type="reset">
          Reset
        </button>
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
}
