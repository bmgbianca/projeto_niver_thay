import React from 'react';
import { Link } from 'react-router-dom';
import './InfoPage.css';

export default function InfoPage() {
  return (
    <main className="teal accent-4 infoMain">
      <section className="questionSection">
        <img
          src="./pinup.png"
          alt="pinup"
          height="200px"
          className="pinupImage"
        />
        <h2 className="questions">
          Oh! Mas o que é o{' '}
          <span className="infoSpan">
            GERADOR AUTOMÁTICO DE MENSAGENS CARINHOSAS PRA THAY?
          </span>
        </h2>
        <p className="paragraph">
          O GAMCPT é um app muito simplesinho, desenhado para gerar
          automaticamente uma mensagem carinhosa e inspiradora pra uma das
          mulheres mais fofas e queridas que nós conhecemos. Seu nome é
          autoexplicativo: ao apertar um botão, este app gera automatica e
          aleatoricamente uma entre as várias mensagens de carinho que as
          pessoas que mais amam a Thay deixaram para ela, seja em texto ou em
          vídeo!
        </p>
        <h2 className="questions">Ah! E como é que ele funciona?</h2>
        <p className="paragraph">
          É simples! Quando você estiver pronta, aperte o botão no fim desta
          página para começar a gerar suas mensagens. A cada vez que você
          apertar o botão, uma nova mensagem - entre as dezenas que foram
          enviadas pelos seus familiares e amigos queridos - será gerada e
          retornada pra você. A mensagem pode vir em formato de texto ou em
          vídeo, mas o que importa é o carinho que está nela!
        </p>
        <h2 className="questions">Legal! Mas pra quê serve isto, afinal?</h2>
        <p className="paragraph">
          [Quase] todo mundo ama fazer aniversário, né? E, se tem uma coisa que
          todo mundo ama mesmo, é receber mensagens carinhosas, cheias de
          desejos bonitos e muito inspiradoras. É, com certeza, uma das coisas
          que nos faz recarregar as energias pra iniciar nossos novo ciclo de
          vida. Levanta o moral, aumenta nossa autoestima e faz a gente se
          lembrar do quanto somos especiais pra outras pessoas neste mundo. Por
          isso, é tão legal ter o seu próprio{' '}
          <span className="infoSpan">
            GERADOR AUTOMÁTICO DE MENSAGENS CARINHOSAS
          </span>
          ; porque toda vez que você estiver meio pra baixo, se esquecendo do
          seu valor e da sua importância, você pode vir aqui e gerar umas
          mensagens de carinho automaticamente, pra nunca se esquecer da pessoa
          incrível que você é!
        </p>
      </section>
      <section className="buttonSection">
        <p className="lastParagraph">Você está pronta?</p>
        <Link to="/sua-mensagem-aleatoria" className="link">
          <button className="waves-effect waves-light btn-large amber accent-4 generateButton">
            <i className="material-icons right">chat_bubble</i>
            Gerar minha mensagem!
          </button>
        </Link>
      </section>
    </main>
  );
}
