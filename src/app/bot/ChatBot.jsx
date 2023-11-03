import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ChatBot = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Link
      to={`${
        location.pathname !== "/" && !location.pathname.endsWith("/bot")
          ? location.pathname + "/bot"
          : (location.pathname.endsWith("/bot") && location.pathname.replace(/\/bot/, " ")) || "/bot"
      }`}
      className="chat-bot"
    >
      <img src="/src/img/bot.svg" alt="chat bot" className="bot-size" />
    </Link>
  );
};

export default ChatBot;
