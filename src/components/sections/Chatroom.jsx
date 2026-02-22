import { useParams } from "react-router-dom";

export function Chatroom() {
  const chatroomId = useParams().chatroomId;

  return (
    <>
      <p>This is the chatroom page (id: {chatroomId})</p>
    </>
  );
}
