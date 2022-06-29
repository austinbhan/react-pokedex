import './App.css';
import { useEffect, useState } from 'react';
// import { getFCP } from 'web-vitals';

// import PokemonList from './PokemonList';
import { getPokemon } from './services/fetch-utils';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function doLoad() {
      const data = await getPokemon();

      console.log(data);
      setPokemon(data.results);
    }

    doLoad();
  }, []);

  return (
    <div className="App">
      <h1>This is the front page</h1>
      <div className="pokemon">
        {
          pokemon.map((poke, i) => <div
            key={poke.pokemon + i}>
            <p>{poke.pokemon}</p>
            <img src={poke.url_image}/>
          </div>)
        }
      </div>
    </div>
  );
}

export default App;
