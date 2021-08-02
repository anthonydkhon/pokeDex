import './App.css';
import Pokemon from './components/pokemoncard'
import DropDownMenu from './components/dropdown';
import { useState, useEffect } from "react";
import { react } from '@babel/types';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex</h1>
        <p>
          Gotta catch 'em all!
        </p>
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
        </div>
      </header>
      <div>
        <Pokemon pokemon={pokemon}/>
      </div>
    </div>
  );
}

export default App;

      
