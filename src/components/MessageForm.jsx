import React from 'react';
import { IsTyping } from 'react-chat-engine';
import { sendMessage, isTyping } from 'react-chat-engine';


function MessageForm(props) {
  const [value, setValue] = React.useState('');
  const { chatId, creds } = props;
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = value.trim();

    if(text.length > 0) sendMessage(creds, chatId, { text });
  }
  const handleChange = (e) => {
    setValue(e.target.value);

    IsTyping(props, chatId)
  }
  return (
    <form className='message-form' onSubmit={handleSubmit}>
      <input className='message-input'
      placeholder='Send a message ...'
      value={value}
      onChange={handleChange}
      onSubmit={handleSubmit}></input>
    </form>
  );
}

export default MessageForm;