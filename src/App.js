import './App.css';

import PokemonList from './PokemonList';

function App() {
  return (
    <div className="App">
      <h1>This is the front page</h1>
      <div className="pokemon">
        <PokemonList />
      </div>
    </div>
  );
}

export default App;
