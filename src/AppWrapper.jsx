import React from 'react';
import Pokemon from './components/pokemoncard'
import DropDownMenu from './components/dropdown';
import MoreData from './components/moreData';
import { useState, useEffect } from "react";
import { Button, Col } from 'reactstrap';
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";


function AppWrapper() {
  const location = useLocation();
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
    });
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
    });
  }

  const reset = () => fetchPokemon().then((data) => setPokemon(data.pokemon));

  return (
    <div className="App">
        
      <header className="App-header">
          <div className="logo">
      <a href="/"><img src="https://fontmeme.com/permalink/210803/ba6d2de3d8fcead1e44f4ce21d2fa53c.png" alt="pokemon-font" border="0" /></a>
        <img src="https://fontmeme.com/permalink/210802/3a80161d3bdb3c6fed36cfc667dc2fbc.png" alt="pokemon-font" border="0" />
        </div>
        {location.pathname === '/' && (
            <section className="headerInput">
          <div className="pokeSearch">
              <input 
                type="text" 
                placeholder="Enter Pokemon Name..."
                onChange={handleChange}
                id="search" 
                name="search"
                aria-label="Search for a Pokemon" />
                </div>
                <div className="dropDown">
              <DropDownMenu handleClick={handleClick} />
              </div>
              <div className="resetBtn">
              <Button onClick={reset}>Reset</Button>
              </div>
              </section>
        )}
      </header>
      
    
      <Switch>
        <Route path="/:name">
          <MoreData />
        </Route>
        <Route exact path="/">
          <Pokemon pokemon={pokemon} />
        </Route>
      </Switch>
    </div>
  )
}

export default AppWrapper;