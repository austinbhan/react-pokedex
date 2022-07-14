import './App.css';
import PokemonSearch from './PokemonSearch';
import YelpSearch from './YelpSearch';

function App() {


  return (
    <>
      <h1 id="title">This is the front page</h1>
      <div className="App">
        <div className="pokemon-list">
          <PokemonSearch />
        </div>
        <div className="yelp-list">
          <YelpSearch />
        </div>
      </div>
    </>
  );
}

export default App;
