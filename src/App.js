import './App.css';
import PokemonSearch from './PokemonSearch';

function App() {


  return (
    <div className="App">
      <h1>This is the front page</h1>
      <div className="pokemon-list">
        <PokemonSearch />
      </div>
    </div>
  );
}

export default App;
