import React from 'react';
import Board from './board';
import Points from './points';
import { connect } from 'react-redux'
import { setScore } from './store/action'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
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
    const { setScore } = this.props
    const { X, O } = this.props.score
    if (winner) {
      let score = {
        'X': winner.winner === 'X' ? 1 : 0,
        'O': winner.winner === 'O' ? 1 : 0,
      }
      setTimeout(() => {
        this.setState((prev) => ({
          squares: Array(9).fill(null),
        }), () => {
          setScore({ 'X': X + score.X, 'O': O + score.O })
        })
      }, 2000)
    }
  }
  render() {
    const squares = this.state.squares
    const { setScore } = this.props
    const winner = this.calculateWinner(squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner.winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="container" >
        {
          (() => {
            this.updatePoints(winner)
            this.restart(squares)
          })()
        }

        <div className="game">
          <div>
            <span className={winner ? 'winner' : 'nextPlayer'}>{status}</span>
          </div>
          <Points score={this.props.score} />
        </div>
        <div className="game-info">

          <button className="button" onClick={() => {
            this.setState({
              squares: Array(9).fill(null),
              xIsNext: true
            }, () => setScore({ 'X': 0, 'O': 0 }))
          }}>Reset</button>

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

export default connect(
  (state) => { return { score: state.score } },
  { setScore }
)(Game)