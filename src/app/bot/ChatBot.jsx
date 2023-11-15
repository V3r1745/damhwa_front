import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ChatBot = (props) => {
  const location = useLocation();
  console.log(location.pathname);
  useEffect(() => {
    if (location.pathname === "/faq1") {
      props.headerThis.setState({
        ...props.headerThis.state,
        bot: !props.headerThis.state.bot,
        single: true,
      });
      return () => {
        if (props.headerThis.state.bot) {
          props.headerThis.setState({
            ...props.headerThis.state,
            bot: !props.headerThis.state.bot,
            single: true,
          });
        }
      };
    }
  }, [location]);
  return (
    <p
      // to={`${location.pathname !== "/" && !location.pathname.endsWith("/bot")
      //     ? location.pathname + "/bot"
      //     : (location.pathname.endsWith("/bot") && location.pathname.replace(/\/bot/, " ")) || "/bot"
      //   }`}
      onClick={() => {
        props.headerThis.setState({
          ...props.headerThis.state,
          bot: !props.headerThis.state.bot,
          single: true,
        });
      }}
      className="chat-bot"
    >
      <img src="/src/img/bot.svg" alt="chat bot" className="bot-size" />
    </p>
  );
};

export default ChatBot;
