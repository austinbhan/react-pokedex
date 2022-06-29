import React from 'react';
import { useState, useEffect } from 'react';
import { getPokemon } from './services/fetch-utils'; 

import './App.css';

export default function PokemonList() {

  const [pokemon, setPokemon] = useState([]);
  const [pokemonQuery, setPokemonQuery] = useState([]);

  useEffect(() => {
    async function doLoad() {
      const data = await getPokemon();  
      setPokemon(data.results);
    }
    doLoad();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
  }

  console.log(pokemonQuery);
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={e => setPokemonQuery(e.target.value)}/>
        <button>Search</button>
      </form>
      <div className="pokemon">
        {
          pokemon.map((poke, i) => <div
            key={poke.pokemon + i}>
            <p>{poke.pokemon}</p>
            <img src={poke.url_image}/>
          </div>)
        }
      </div>
    </>
  );
}
