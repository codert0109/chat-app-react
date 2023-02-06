import React from "react";
import { username } from './config';

const ChatBox = ({ chat }) => {
    console.log(chat);
    return (
        <div className='col-xl-12'>
            {
                chat
                    .map(chat =>
                        <div key={chat.id} className="message">
                            <div className={`${chat.receiver !== 'admin' ? 'balon1' : 'balon2'} p-3 m-1`}>
                                {chat.text}
                            </div>
                        </div>)
            }
        </div>
    )
    // }
}

export default ChatBox;