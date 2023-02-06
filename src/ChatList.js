import React from "react";

const ChatList = ({ chatList, selectedChat, selectChat }) => {
    return (
        <ul className="list-group list-group-flush w-100">
            {
                chatList
                    .map(chat =>
                        <li
                            key={chat.uid}
                            className={`list-group-item ${chat.uid === selectedChat ? 'active' : ''}`}
                            onClick={() => selectChat(chat.uid)}>{chat.name} </li>)
            }
        </ul>
    )
}

export default ChatList;