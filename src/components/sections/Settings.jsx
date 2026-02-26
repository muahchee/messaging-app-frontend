export function Settings() {
  return (
    <>
      <h2>Settings</h2>

      <h3>Current settings:</h3>

      <img className="settings" src="/user1.jpg" alt="User1's profile picture" />

      <ul>
        <li>Username: {"user 1"}</li>
        <li>Password: {"password1234"}</li>
      </ul>

      <hr />

      <h3>Update settings</h3>
      <form className="standard"  action="">
        <p>
          <label htmlFor="username">New Username: </label>
          <input type="text" id="username" name="username" />
        </p>

        <p>
          <label htmlFor="password">New Password: </label>
          <input type="password" id="password" name="password" />
        </p>

        <label htmlFor="profilePicture">New Profile Picture (optional): </label>
        <p>[only png, jpeg, jpg and webp are accepted]</p>
        <input
          type="file"
          name="profilePicture"
          id="profilePicture"
          accept="image/png, image/jpeg, image/jpg, image/webp"
        />


        <button type="submit">Update</button>
      </form>
    </>
  );
}
