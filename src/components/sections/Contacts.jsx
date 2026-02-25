import { SingleContact } from "../partials/SingleContact";

export function Contacts() {
  return (
    <>
      <h2>Contacts</h2>
      <ul className="contacts">
        {/* TODO: Iterate over user's contacts */}
        <li>
          <SingleContact username={"User 1"} />
        </li>
        <li>
          <SingleContact username={"User 2"} />
        </li>
        <li>
          <SingleContact username={"User 3"} />
        </li>
      </ul>
    </>
  );
}
