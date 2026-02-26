import { SingleContact } from "../partials/SingleContact";

export function Contacts() {
  return (
    <>
      <h2>Contacts</h2>

      <h3>Request new contact</h3>
      <form action="">
        <label htmlFor="contactName">Send contact request to:</label>
        <input type="text" name="contactName" id="contactName" required />
        <button type="submit">Send</button>
      </form>

      <hr />

      <h3>Pending requests</h3>
      <ul className="contacts">
        {/* TODO: Iterate over user's pending request */}
        <li>
          <SingleContact username={"User 3"} />
        </li>
      </ul>

      <hr />
      
      <h3>Contact List</h3>
      <ul className="contacts">
        {/* TODO: Iterate over user's contacts */}
        <li>
          <SingleContact username={"User 1"} />
        </li>
        <li>
          <SingleContact username={"User 2"} />
        </li>
      </ul>
    </>
  );
}
