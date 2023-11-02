import React from "react";

const ChatElement = (props) => {
  return (
    <div className={props.className}>
      <div
        className={`chat-element border-radius-15 ${
          props.color ? "user-color" : "gpt-color"
        }`}
        dangerouslySetInnerHTML={{ __html: props.text }}
      />
    </div>
  );
};

export default ChatElement;
