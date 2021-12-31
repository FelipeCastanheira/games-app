import React from 'react';
import xbox from '../img/xbox.jpg';
import ball from '../img/ball.jpg';
import gameboy from '../img/gameboy.jpg';

const games = [
  {src: xbox, txt: 'Os melhores jogos', color: '#FBFE29'},
  {src: ball, txt: 'Diversão garantida', color: 'white'},
  {src: gameboy, txt: 'Todos os dias', color: '#EAAAAB'},
]

export class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      slide: 0,
      currClass: 'container slide0',
    }

    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);
  }

  handleLeft() {
    const newSlide = this.state.slide === 0? 2: this.state.slide - 1;
  
    this.setState((state) => ({
      slide: newSlide,
      currClass: `container slide${newSlide}`
    }))
  }

  handleRight() {
    const newSlide = this.state.slide === 2? 0: this.state.slide + 1;
  
    this.setState((state) => ({
      slide: newSlide,
      currClass: `container slide${newSlide}`
    }))
  }

  render() {
    return (
      <main>
        <div className={this.state.currClass}>
          {games.map((game) => (
            <div className="carousel" key={game.txt}>
              <img src={game.src} className={game.color} alt={game.txt} />
              <h3>{game.txt}</h3>
            </div>
          ))}
        </div>
        <button onClick={this.handleLeft} className="move-left">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button onClick={this.handleRight} className="move-right">
          <i className="fas fa-chevron-right"></i>
        </button>
      </main>
    )
  }
}