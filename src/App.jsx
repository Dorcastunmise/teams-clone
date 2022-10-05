import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID={"ba3c5588-66f6-46f7-a676-8b9086feda82"}
      userName={"dorcas_tunmise"}
      userSecret={"123"}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
      />
  );
};

export default App;


