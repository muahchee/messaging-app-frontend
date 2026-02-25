export function Signup() {
  return (
    <>
      <h2>Signup</h2>

      <form className="standard" action="" enctype="multipart/form-data">
        <p>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" name="username" required />
        </p>

        <p>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" required />
        </p>

        <p>
          <label htmlFor="password">Confirm Password: </label>
          <input type="password" id="confirmPassword" name="confirmPassword" required />
        </p>

        <label htmlFor="profilePicture">Profile Picture (optional): </label>
        <p>[only png, jpeg, jpg and webp are accepted]</p>
        <input
          type="file"
          name="profilePicture"
          accept="image/png, image/jpeg, image/jpg, image/webp"
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
