import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

export default function WelcomePage() {
  const [isAudio, setIsAudio] = useState(false);

  useEffect(() => {
    console.log(isAudio);
    const audio = document.getElementById('audio1');
    if (isAudio) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isAudio]);

  return (
    <main className="mainBackground">
      <button
        onClick={() => setIsAudio(true)}
        className="waves-effect waves-light btn-small pink darken-2 audioButton"
      >
        <i className="material-icons icon1 left">volume_up</i>
      </button>
      <audio
        style={{ display: 'none' }}
        id="audio1"
        src="./flautinha_bugada.mp4"
        type="audio/mp4"
        loop
      />
      <div className="waves-effect waves-light pink lighten-5 red-text text-darken-4 title1">
        <h1>
          Bem-vinda ao maravilhoso{' '}
          <span className="span1">
            GERADOR AUTOMÁTICO DE MENSAGENS CARINHOSAS PRA{' '}
            <span className="span2">Thay</span>
          </span>
        </h1>
      </div>
      <Link className="nextLink" to="/info">
        <button
          onClick={() => {
            setIsAudio(false);
          }}
          className="waves-effect waves-light btn pink darken-2 nextButton"
        >
          <i className="material-icons right">chevron_right</i>
          Prosseguir
        </button>
      </Link>
    </main>
  );
}
