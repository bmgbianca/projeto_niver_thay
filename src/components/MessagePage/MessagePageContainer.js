import React, { useState, useEffect } from 'react';
import MessagePagePresentational from './MessagePagePresentational';
import msg from './messages.json';

export default function MessagePageContainer() {
  const [source, setSource] = useState(null);
  const [message, setMessage] = useState(null);
  const [person, setPerson] = useState(null);
  const [picture, setPicture] = useState(null);

  const messageGenerator = () => {
    setPerson(null);
    setPicture(null);
    setSource(null);
    setMessage(null);
    const randomNumber = Math.floor(Math.random() * msg.messages.length);
    setPerson(msg.messages[randomNumber].person);
    setPicture(msg.messages[randomNumber].picture);
    if (msg.messages[randomNumber].type === 'video') {
      setSource(msg.messages[randomNumber].src);
    } else if (msg.messages[randomNumber].type === 'text') {
      setMessage(msg.messages[randomNumber].src);
    } else {
      console.log('Type error!');
    }
  };

  useEffect(() => {
    messageGenerator();
  }, []);
  return (
    <MessagePagePresentational
      message={message}
      source={source}
      person={person}
      picture={picture}
      generateMessage={messageGenerator}
    />
  );
}
