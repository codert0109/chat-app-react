import React, { Component, useEffect, useState } from 'react';

import { CometChat } from '@cometchat-pro/chat';
import MDSpinner from "react-md-spinner";
import config from './config';
import ChatBox from './ChatBox';
import ChatList from './ChatList';

const agentUID = config.agentUID;
const AGENT_MESSAGE_LISTENER_KEY = 'agent-listener'
const limit = 30;

const mockupdata = [
  {
    receiver: 'John',
    messages: [
      {
        type: 'receive', text: 'hello'
      },
      {
        type: 'send', text: 'yeah, hello!'
      }
    ]
  }
]

function App() {
  const [chatList, setChatList] = useState([]);
  const [selectedChat, setSelectedChat] = useState({});
  const [chatIsLoading, setChatIsLoading] = useState(false);
  const [customerIsLoading, setCustomerIsLoading] = useState(false);

  useEffect(() => {
    setChatList(mockupdata);
    setSelectedChat(mockupdata[0]);
  }, [])

  const onSelectChat = () => {

  }

  const handleSubmit = (val) => {

  }
  console.log(mockupdata);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-2'></div>
        <div className="col-md-8 h-100pr border rounded">
          <div className='row'>
            <div className='col-lg-8 col-xs-12 bg-light' style={{ height: 658 }}>
              <div className='row p-3 bg-white'>
                <h2>Who you gonna chat with?</h2>
              </div>
              <div className='row pt-5 bg-white' style={{ height: 530, overflow: 'auto' }}>
                <ChatBox chat={selectedChat.messages} />
              </div>
              <div className="row bg-light" style={{ bottom: 0, width: '100%' }}>
                <form className="row m-0 p-0 w-100" onSubmit={handleSubmit}>

                  <div className="col-9 m-0 p-1">
                    <input id="text"
                      className="mw-100 border rounded form-control"
                      type="text"
                      name="text"
                      ref="message"
                      placeholder="Type a message..." />
                  </div>
                  <div className="col-3 m-0 p-1">
                    <button className="btn btn-outline-secondary rounded border w-100"
                      title="Send"
                      style={{ paddingRight: 16 }}>Send</button>
                  </div>
                </form>
              </div>
            </div>
            <div className='col-lg-4 col-xs-12 bg-light' style={{ height: 658 }}>
              <div className='row p-3'><h2>Recent Chat</h2></div>
              <div className='row ml-0 mr-0 h-75 bg-white border rounded' style={{ height: '100%', overflow: 'auto' }}>
                <ChatList chatList={chatList} selectedChat={selectedChat} selectChat={onSelectChat} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;