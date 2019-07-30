import React from 'react';
import Board from './board';
import Points from './points';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      X: 0,
      O: 0,
      points: { 'X': 0, 'O': 0 },
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
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
          return { winner: squares[a], Xpoint: this.state.X + 1 }
        }
        if (squares[a] === 'O') {
          return {
            winner: squares[a], Opoint: this.state.O + 1
          }
        }

      }
    }
    return null;
  }


  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = this.calculateWinner(current.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner.winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    console.log(this.state.points)
    return (
      <div className="container">
        <div className="game">
          <div><h3>{status}</h3></div>
          <Points winner={winner} points={this.state.points} />
        </div>
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />

        </div>
        <div className="game-info">

          <div><button className="button" onClick={winner ? () => {
            this.setState({
              history: history.concat([{
                squares: Array(9).fill(null)
              }]),
              points: Object.assign(this.state.points, {
                'X': winner.Xpoint ? this.state.points.X + 1 : this.state.points.X,
                'O': winner.Opoint ? this.state.points.O + 1 : this.state.points.O
              })
            })
          }
            :
            () => {
              this.setState({
                history: history.concat([{
                  squares: Array(9).fill(null)
                }]),
                points: Object.assign(this.state.points, {
                  'X': this.state.points.X,
                  'O': this.state.points.O
                })
              })
            }
          }
          >New game</button>
          </div>

          <div>
            <button className="button" onClick={() => {
              this.setState({
                history: history.concat([{
                  squares: Array(9).fill(null)
                }]),
                points: { 'X': 0, 'O': 0 }
              })
            }}>Reset</button>
          </div>
        </div>
      </div >
    )
  }
}

