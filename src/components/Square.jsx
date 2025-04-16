import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Square({ value, onSquareClick }) {
  const getIcon = () => {
    if (value === 'X')
      return <i className="bi bi-x-lg" style={{ color: '#00d1ff', fontSize: '28px' }}></i>;
    if (value === 'O')
      return <i className="bi bi-circle" style={{ color: '#ff4081', fontSize: '28px' }}></i>;
    return null;
  };

  return (
    <Button
      variant="dark"
      className="m-2 d-flex justify-content-center align-items-center"
      style={{
        width: 80,
        height: 80,
        fontSize: '24px',
        border: '2px solid #00d1ff',
        borderRadius: '12px',
        boxShadow: '0 0 8px #00d1ff88',
      }}
      onClick={onSquareClick}
    >
      {getIcon()}
    </Button>
  );
}
    