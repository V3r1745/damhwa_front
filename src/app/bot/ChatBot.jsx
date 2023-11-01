import { Link } from "react-router-dom";

const ChatBot = () => {
  return (
    <Link to="/bot" className="chat-bot">
      <img src="./src/img/bot.svg" alt="chat bot" className="bot-size" />
    </Link>
  );
};

export default ChatBot;
