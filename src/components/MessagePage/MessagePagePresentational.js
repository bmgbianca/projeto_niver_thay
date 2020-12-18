import React, { useState, useEffect } from 'react';
import './MessagePage.css';
import { Link } from 'react-router-dom';

export default function MessagePagePresentational({
  message,
  source,
  person,
  picture,
  generateMessage,
}) {
  const [flipBoxClass, setFlipBoxClass] = useState('flip-box');
  const [isMessage, setIsMessage] = useState(false);
  const [message1, setMessage1] = useState(message);
  const [message2, setMessage2] = useState(message);

  useEffect(() => {
    if (message !== null) {
      if (message.length > 600) {
        setMessage1(message.slice(0, 600));
        setMessage2(message.slice(590, undefined));
      }
    }
  }, [message]);

  const handlePictureClick = () => {
    if (flipBoxClass === 'flip-box') {
      setFlipBoxClass('clicked-flip-box');
    } else {
      setFlipBoxClass('flip-box');
    }
  };

  const handleTextClick = () => {
    setIsMessage(true);
    const audio = document.getElementById('audio2');
    audio.play();
  };

  const handleMoreTextClick = () => {
    const paragraph = document.getElementById('messagePar');
    paragraph.textContent = message2;
  };

  const handleBackClick = () => {
    generateMessage();
    setIsMessage(false);
    const audio = document.getElementById('audio2');
    audio.pause();
  };

  return (
    <main className="teal accent-4 messageMain">
      <audio
        id="audio2"
        style={{ display: 'none' }}
        src="./flautinha_titanic.mp4"
        type="audio/mp4"
        loop
      />
      <h1 className="messageTitle">
        Sua mensagem foi enviada por:{' '}
        <span className="messageSpan">{person}</span>
      </h1>
      {isMessage === false ? (
        <div className={flipBoxClass} onClick={handlePictureClick}>
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img
                className="circle friendImg"
                src={picture}
                alt="friend_picture"
              />
            </div>
            <div className="flip-box-back">
              {source && (
                <p
                  className="videoParagraph"
                  onClick={() => {
                    setIsMessage(true);
                  }}
                >
                  VÍDEO
                </p>
              )}
              {message && (
                <p className="messageParagraph" onClick={handleTextClick}>
                  {message.slice(0, 160)}...
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <section className="messageSection">
          {source && (
            <video
              id="video"
              className="video"
              type="video/mp4"
              src={source}
              controls
              autoPlay
            ></video>
          )}
          {message && (
            <section className="messageSection">
              {message.length < 600 ? (
                <p className="fullMessage">{message}</p>
              ) : (
                <p id="messagePar" className="fullMessage">
                  {message1}
                  <button className="moreButton" onClick={handleMoreTextClick}>
                    ...
                  </button>
                </p>
              )}
              <img
                className="messageImage"
                src="./flower_frame.png"
                alt="flower_frame"
              />
              <img
                className="messageImagePortrait"
                src="./flower_frame_portrait.png"
                alt="flower_frame"
              />
            </section>
          )}
          <Link to="/sua-mensagem-aleatoria" className="link">
            <button
              onClick={handleBackClick}
              className="waves-effect waves-light btn-large amber accent-4 generateButton"
            >
              <i className="material-icons right">autorenew</i>
              Gerar nova mensagem!
            </button>
          </Link>
        </section>
      )}
    </main>
  );
}
