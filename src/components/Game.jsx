import { useState } from 'react';
import Board from './Board';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [playerChoice, setPlayerChoice] = useState(null);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const handleChoice = (choice) => {
    setPlayerChoice(choice);
  };

  const moves = history.map((_, move) => {
    const desc = move ? `Ir para jogada #${move}` : 'Início do jogo';
    return (
      <ListGroup.Item key={move} className="mb-2">
        <Button
          variant="outline-primary"
          size="sm"
          className="w-100 d-flex align-items-center justify-content-center gap-2"
          style={{
            borderRadius: '8px',
            padding: '6px 10px',
            boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            color: '#007bff',
            fontWeight: '600',
            transition: 'all 0.3s ease',
          }}
          onClick={() => jumpTo(move)}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#007bff';
            e.target.style.color = '#fff';
            e.target.style.borderColor = '#0056b3';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#007bff';
            e.target.style.borderColor = '#007bff';
          }}
        >
          <i className={`bi ${move > 0 ? 'bi-arrow-return-left' : 'bi-house'}`}></i>
          {desc}
        </Button>
      </ListGroup.Item>
    );
  });

  return (
    <div className="d-flex flex-column align-items-center p-4">
      <div className="mb-4">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      
      <div className="mb-4">
        {playerChoice && <p>Você escolheu: {playerChoice}</p>}

        <ListGroup className="w-100">
          {moves}
        </ListGroup>
      </div>
    </div>
  );
}
