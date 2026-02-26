import { useParams } from "react-router-dom";
import { SingleContact } from "../partials/SingleContact";

export function Chatroom() {
  const chatroomId = useParams().chatroomId;

  // TODO: onload, move focus to latest chat message

  return (
    <>
      <h2>{"[Chatroom Name]"}</h2>
      <p>Chatroom ID: {chatroomId}</p>

      <ul className="chatroom">
        <li className="chatbox self">
          <SingleContact username={"user 1"} />

          <div className="chatbox-cont">
            <img src="/chatimg1.jpg" alt="" />
            <p className="message">
              Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
              welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
              garlic.
            </p>
            <p className="date">(1:52pm 2/3/2026)</p>
          </div>
        </li>

        <li className="chatbox other">
          <SingleContact username={"user 3"} />

          <div className="chatbox-cont">
            <img src="/chatimg2.png" alt="" />
            <p className="date">(1:52pm 2/3/2026)</p>
          </div>
        </li>

        <li className="chatbox other">
          <SingleContact username={"user 2"} />
          <div className="chatbox-cont">
            <p className="message">
              Turnip greens yarrow ricebean rutabaga endive cauliflower sea
              lettuce kohlrabi amaranth water spinach avocado daikon napa
              cabbage asparagus winter purslane kale. Celery potato scallion
              desert raisin horseradish spinach carrot soko. Lotus root water
              spinach fennel kombu maize bamboo shoot green bean swiss chard
              seakale pumpkin onion chickpea gram corn pea. Brussels sprout
              coriander water chestnut gourd swiss chard wakame kohlrabi
              beetroot carrot watercress. Corn amaranth salsify bunya nuts nori
              azuki bean chickweed potato bell pepper artichoke.
            </p>
            <p className="date">(1:52pm 2/3/2026)</p>
          </div>
        </li>
      </ul>

      <form className="standard" action="">
        <label htmlFor="chatImg">
          Post image [only png, jpeg, jpg and webp are accepted]:{" "}
        </label>
        <input
          type="file"
          name="chatImg"
          id="chatImg"
          accept="image/png, image/jpeg, image/jpg, image/webp"
        />

        <hr />

        <label htmlFor="message">Message: </label>
        <textarea name="message" id="message" required></textarea>

        <button type="submit">send</button>
      </form>
    </>
  );
}
