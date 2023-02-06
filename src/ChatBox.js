import React from "react";

const ChatBox = ({ chat }) => {
  return (
    <div className="col-xl-12">
      {chat.map((chat, index) => (
        <div key={index} className="message">
          <div
            className={`${
              chat.type !== "receive" ? "balon1" : "balon2"
            } p-3 m-1`}
          >
            {chat.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
