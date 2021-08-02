/*import { useState, useEffect } from "react";
import "../App.css";

function Pokemon() {
    let [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
            .then((res) => res.json())
            .then((data) => setPokemon(data.pokemon))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="Pokemon-list">
            {pokemon.map((pokemon) => (
                <div key={pokemon.id} className="pokemon-card">
                   <h3>
                       {pokemon.name}
                   </h3>
                   <a>
                   <img src = {pokemon.img}>
                   </img>
                    </a>
                    <label>
                        Num.
                    </label>
                    <ul>
                        {pokemon.num}
                    </ul>
                   <label>
                       Type
                   </label>
                   <ul>
                       {pokemon.type.map ((type) => {
                            return (
                                <li key={type}>
                                    {type}
                                </li>
                            )
                       })}
                   </ul>
                    
                </div>
            ))}
        </div>
    )
}

export default Pokemon;
                   */