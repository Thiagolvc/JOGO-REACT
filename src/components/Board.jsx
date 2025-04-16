import Square from './Square';

export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  const status = winner
    ? `🏆 Vencedor: ${winner}`
    : `➡️ Próximo jogador: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div>
      <h5 className="mb-3">{status}</h5>
      {[0, 3, 6].map((row) => (
        <div key={row} className="d-flex justify-content-center">
          <Square value={squares[row]} onSquareClick={() => handleClick(row)} />
          <Square value={squares[row + 1]} onSquareClick={() => handleClick(row + 1)} />
          <Square value={squares[row + 2]} onSquareClick={() => handleClick(row + 2)} />
        </div>
      ))}
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return squares[a];
  }
  return null;
}
