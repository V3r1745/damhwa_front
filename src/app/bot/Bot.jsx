import { useState, useEffect } from "react";
import ChatElement from "./ChatElement";

const Bot = () => {
  if (localStorage.getItem("chat") === null) {
    localStorage.setItem("chat", JSON.stringify([]));
  }
  const [chattingValue, setChattingValue] = useState("");
  const [chatElement, setChatElement] = useState([
    ...JSON.parse(localStorage.getItem("chat")),
  ]);
  const inputChat = (e) => {
    setChattingValue(e.target.value);
  };
  const addChat = () => {
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
  }, [chatElement]);
  return (
    <div className="chatting-section">
      <h1 className="chatting-h1">챗봇 질문하기</h1>
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
