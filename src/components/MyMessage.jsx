import React from 'react';

function MyMessage({ message }) {
    if(message?.attachments?.length > 0) { {/* to verify if message is a text or image */}
        return (
            <img 
              src={message.attachments[0].file}
              className="message-image"
              style={{ float: 'right' }}
            />
        );
    }
  return (
            <div className='message' 
            style={{ float: `right`, 
            marginRight: `18px`, 
            color: `white`, 
            backgroundColor: `#3b2a50`}}>
              {message.text}
            </div>
  );
};

export default MyMessage;