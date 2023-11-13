import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ChatElement from "./ChatElement";
import axios from "axios";

axios.defaults.withCredentials = true;

const Bot = (props) => {
  // const [displayOption, setDisplayOption] = useState(false);
  const location = useLocation();
  if (localStorage.getItem("chat") === null) {
    localStorage.setItem(
      "chat",
      JSON.stringify([
        { chat: "안녕 나는 초록여우야 무엇이든 물어봐!", user: false },
      ])
    );
  }
  const [chattingValue, setChattingValue] = useState("");
  const [chatElement, setChatElement] = useState([
    ...JSON.parse(localStorage.getItem("chat")),
  ]);
  const [isUserChat, setIsUserChat] = useState(false);
  const inputChat = (e) => {
    setChattingValue(e.target.value);
  };
  const addChat = () => {
    setIsUserChat(true);
    setChatElement([
      ...chatElement,
      {
        chat: chattingValue
          .replace(/[<>]/g, (v) => {
            if (v === "<") {
              return "&lt;";
            } else {
              return "&gt;";
            }
          })
          .replace(/\n/g, "<br />"),
        user: true,
      },
    ]);
  };
  useEffect(() => {
    localStorage.setItem("chat", JSON.stringify(chatElement));
    setChattingValue("");
    document.getElementsByClassName("chatting-main")[0].scrollTo({
      top: document.getElementsByClassName("chatting-main")[0].scrollHeight,
      behavior: "smooth",
    });
    if (isUserChat) {
      (async () => {
        setIsUserChat(false);
        console.log(
          window.location.origin.replace(`:${window.location.port}`, "")
        );
        let waitingCheck = true;
        let i = 0;
        const waiting = () => {
          setTimeout(() => {
            if (i < 3) {
              const temp = [...chatElement];
              !temp.at(-1).user && temp.pop();
              temp.push({ chat: "*".repeat(i + 1), user: false });
              setChatElement([...temp]);
              i++;
            } else {
              i = 0;
            }
            if (waitingCheck) {
              waiting();
            }
          }, 150);
        };
        waiting();
        const result = await axios.post(
          // `${window.location.origin.replace(`:${window.location.port}`, "")}:10150/chat`,
          `http://13.125.14.153:10150/chat`,
          {
            chat: JSON.parse(localStorage.getItem("chat")),
          }
        );
        waitingCheck = false;
        setTimeout(() => {
          const temp = [...chatElement];
          setChatElement([
            ...temp,
            { chat: result.data.result.replace(/\n/g, "<br />"), user: false },
          ]);
          console.log(result);
        }, 300);
      })();
    }
  }, [chatElement]);
  return (
    <div
      className={`chatting-section ${props.bot ? "in-bot" : "out-bot"} ${
        props.single ? "dY" : "dN"
      }`}
    >
      <h1 className="chatting-h1">
        챗봇 질문하기
        <p
          className="close-bot xi-close link-none hover-cursor"
          onClick={() => {
            props.headerThis.setState({ ...props.headerThis, bot: !props.bot });
          }}
        ></p>
      </h1>
      <div className="chatting-main">
        {chatElement.map((v, i) => {
          if (v.user) {
            return (
              <ChatElement
                text={v.chat}
                key={i}
                className="user-chat"
                color={true}
              />
            );
          } else {
            return (
              <ChatElement
                text={v.chat}
                key={i}
                className="gpt-chat"
                color={false}
              />
            );
          }
        })}
      </div>
      <div className="display-flex-space-ev">
        <textarea
          type="text"
          className="chatting-input border-none border-radius-30"
          value={chattingValue}
          onChange={inputChat}
        ></textarea>
        <button
          type="button"
          className="chatting-button border-radius-30"
          onClick={addChat}
        >
          전송
        </button>
      </div>
    </div>
  );
};

export default Bot;
