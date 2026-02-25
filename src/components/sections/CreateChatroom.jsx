export function CreateChatroom() {
  return (
    <>
      <h2>Create Chatroom</h2>
      <form className="standard" action="">
        <p>
          <label htmlFor="username">Chatroom Name: </label>
          <input type="text" id="chatroomName" name="chatroomName" required />
        </p>

        <fieldset>
          <legend>The Members of Chat: </legend>
            {/* TODO: iterate over user's contact */}
          <div>
            <label>
              <input
                type="checkbox"
                id={"user1"}
                name="chatMembers"
                value={"user1"}
              />
              {"User 1"}
            </label>
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                id={"user2"}
                name="chatMembers"
                value={"user2"}
              />
              {"User 2"}
            </label>
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                id={"user3"}
                name="chatMembers"
                value={"user3"}
              />
              {"User 3"}
            </label>
          </div>
        </fieldset>

        <button type="submit">Create</button>
      </form>
    </>
  );
}
