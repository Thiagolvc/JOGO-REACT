import Game from './components/Game';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">
  Jogo da Velha <i className="bi bi-question-circle-fill" title="Ajuda"></i>
</h1>

      <Game />
    </div>
  );

  return (
    <div className="container mt-5 text-center">
      <h1 className="text-primary">Testando Bootstrap!</h1>
      <button className="btn btn-success">Clique aqui</button>
    </div>
  );
}


export default App;
