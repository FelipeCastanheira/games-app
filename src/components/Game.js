import React from 'react';
import xbox from '../img/xbox.jpg'

export class Game extends React.Component {
  render() {
    return (
      <main>
        <img src={xbox} alt='video-game' />
        <h3>Os melhores jogos</h3>
        <button className="move-left">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="move-right">
          <i className="fas fa-chevron-right"></i>
        </button>
      </main>
    )
  }
}