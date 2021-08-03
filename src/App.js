import './App.css';
import Pokemon from './components/pokemoncard'
import DropDownMenu from './components/dropdown';
import { useState, useEffect } from "react";
import { react } from '@babel/types';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'reactstrap';


function App() {
  let [pokemon, setPokemon] = useState([]);

  const fetchPokemon = () => {
    return fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
        .then((res) => res.json())
        .catch((err) => console.log(err));
  }
  
  const handleChange = (e) => {
    const input = e.target.value;

    fetchPokemon().then((data) => {
      setPokemon(data.pokemon.filter((p) => {
      return p.name.toLowerCase().includes(input.toLowerCase());
      }))
    })
  }
  
  useEffect(() => {
    fetchPokemon().then((data) => setPokemon(data.pokemon));
  }, []);

  const handleClick = (e) => {
    const input = e.target.value;

    fetchPokemon().then((data) => {
      setPokemon(data.pokemon.filter((p) => {
      return p.type.includes(input);
      }))
    })
  }

  const reset = () => {
    fetchPokemon().then((data) => setPokemon(data.pokemon));
  }

  return (
    <div className="App">
      <header className="App-header">
      <a href="/"><img src="https://fontmeme.com/permalink/210802/7bbb60fb4fb7570eb56c7c884bd45176.png" alt="pokemon-font" border="0" /></a>
      <img src="https://fontmeme.com/permalink/210802/3a80161d3bdb3c6fed36cfc667dc2fbc.png" alt="pokemon-font" border="0" />
      <div className="pokeSearch">
          <input 
          type="text" 
          placeholder="Enter Pokemon Name..."
          onChange={handleChange}
          id="search" 
          name="search"
          aria-label="Search for a Pokemon">
          </input> 
        <DropDownMenu handleClick={handleClick} />
        <Button onClick={reset}>Reset</Button>
        </div>
      </header>
      <div>
        <Pokemon pokemon={pokemon}/>
      </div>
    </div>
  );
}

export default App;

      
