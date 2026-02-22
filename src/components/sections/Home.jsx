import { Link } from "react-router-dom"

export function Home() {
  return(
    <>
      <Link to={"/createChatroom"}>Create Chatroom</Link>

      <h2>Chatrooms</h2>
      <ul className="chatroom-list">
        <li>
          <h3><Link to={"/chatroom/1"}>[CHATROOM NAME]</Link></h3>
          <p>[user1, user2, user3]</p>
          <p>Last message at : [last message date] </p>
        </li>
        <li>
          <h3><Link to={"/chatroom/2"}>[CHATROOM NAME]</Link></h3>
          <p>[user1, user2, user3]</p>
          <p>Last message at : [last message date] </p>
        </li>
        <li>
          <h3><Link to={"/chatroom/3"}>[CHATROOM NAME]</Link></h3>
          <p>[user1, user2, user3]</p>
          <p>Last message at : [last message date] </p>
        </li>

      </ul>
    </>
  )
}