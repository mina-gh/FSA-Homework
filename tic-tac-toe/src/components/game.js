import React, {Component} from 'react';
import Board from './board';

export default class Game extends Component {

  constructor(){
    super();
    this.state = {
      stepNumber: 0,
      xIsNext: true,
      history:[
        {
          squares: Array(9).fill(null),
        }
      ]
    }
  }

  jumpTo(step){
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  handleClick(i){
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length -1];
    const squares = current.squares.slice();

    // check if a player won, or square[i] has been already clicked before.
    if(calculateWinner(squares) || squares[i]) return;

    squares[i] = this.state.xIsNext? 'X': 'O';

    // update the state
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    const winner = calculateWinner(current.squares);
    let status = winner? `Winner is ${winner}!`: 'Next player: ' + (this.state.xIsNext? 'X': 'O');

    const moves = history.map((step, move) => {
      const desc = move? `Go to move # ${move}` : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={()=>this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={(i)=>{this.handleClick(i)}} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
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

  let winner = null;
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      winner = squares[a];
      break;
    }
  }
  return winner;
}


