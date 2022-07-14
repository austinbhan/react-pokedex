import React from 'react';
import './App.css';

export default function PokemonList({ pokemon }) {
  
  return (
    <>

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
