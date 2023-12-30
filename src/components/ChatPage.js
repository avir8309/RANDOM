import React from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';


const ChatPage = ({Post}) => {
  return (
    <div className="chat">
      <ChatBar />
      <div className="chat__main">
        <ChatBody Post={Post} />
     
      </div>
    </div>
  );
};

export default ChatPage;