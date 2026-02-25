export function Login() {
  return (
    <>
      <h2>Login</h2>
      <form className="standard" action="">
        <p>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" name="username" required />
        </p>

        <p>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" required />
        </p>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
