import React from 'react';
import Board from './board';
import Points from './points';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      squares: Array(9).fill(null),
      points: { 'X': 0, 'O': 0 },
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({

      squares: squares,

      xIsNext: !this.state.xIsNext,
    });
  }

  calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        if (squares[a] === 'X') {
          return { winner: squares[a] }
        }
        if (squares[a] === 'O') {
          return { winner: squares[a] }
        }

      }
    }
    return null;
  }

  restart = (squares) => {
    if (!squares.includes(null)) {
      setTimeout(() => {
        this.setState({
          squares: Array(9).fill(null),
        })
      }, 2000)
    }
  }

  updatePoints = (winner) => {
    if (winner) {
      let score = {
        'X': winner.winner === 'X' ? 1 : 0,
        'O': winner.winner === 'O' ? 1 : 0,
      }
      setTimeout(() => {
        this.setState((prev) => ({
          squares: Array(9).fill(null),
          points: { 'X': prev.points.X + score.X, 'O': prev.points.O + score.O }
        }))
      }, 2000)

    }
  }
  render() {
    const squares = this.state.squares
    const winner = this.calculateWinner(squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner.winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    console.log('state', this.state.points)
    return (
      <div className="container" >
        {
          (() => {
            this.updatePoints(winner)
            this.restart(squares)
          })()
        }
        <div className="left">
          <div className="game">
            <div>
              <h3 className={winner ? 'winner' : 'nextPlayer'}>{status}</h3>
            </div>
            <Points winner={winner} points={this.state.points} />
          </div>
          <div className="game-info">
            <div>
              <button className="button" onClick={() => {
                this.setState({
                  squares: Array(9).fill(null),
                  points: { 'X': 0, 'O': 0 },
                  xIsNext: true
                })
              }}>Reset</button>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="game-board">
            <Board
              squares={squares}
              onClick={(i) => this.handleClick(i)}
            />

          </div>
        </div>
      </div >
    )
  }
}

