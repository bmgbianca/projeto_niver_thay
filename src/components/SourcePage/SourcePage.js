import React from 'react';

export default function SourcePage() {
  return (
    <main className="teal accent-4 messageMain">
      <h1 className="messageTitle">
        Sua mensagem foi enviada por:{' '}
        <span className="messageSpan">{person}</span>
      </h1>
    </main>
  );
}
