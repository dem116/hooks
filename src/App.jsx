import React from 'react';
import useFecthCharacters from './hooks/useFecthCharacters';
import './App.css';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';
 
  const { data: pokemon, loading: loadingPokemon, error: errorPokemon } = useFecthCharacters(urlPokemon);
  const { data: rick, loading: loadingRick, error: errorRick } = useFecthCharacters(urlRick);
  

 return (
  <>
    <h2>Personaje Pokemon</h2>
    {loadingPokemon && <p>Cargando...</p>}
    {errorPokemon && <p>Error: {errorPokemon.message}</p>}
    {pokemon && (
      <>
        <p>{pokemon.name}</p>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </>
    )}

    <h2>Personaje Rick and Morty</h2>
    {loadingRick && <p>Cargando...</p>}
    {errorRick && <p>Error: {errorRick.message}</p>}
    {rick && (
      <>
        <p>{rick.name}</p>
        <img src={rick.image} alt={rick.name} />
      </>
    )}
  </>
);

}

export default App;
