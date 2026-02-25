export function SingleContact({ username }) {
  return (
    <div className="contact-item">
      <img
        className="profile-pic"
        src={`/${username.toLowerCase().replace(" ", "")}.jpg`}
        alt={`${username}'s profile picture`}
      />
      <p className="bold">{username}</p>
    </div>
  );
}
