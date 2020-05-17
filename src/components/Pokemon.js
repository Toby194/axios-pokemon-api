import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Pokemon (props) {
    const [pokemon, setPokemon] = useState([]);
    const [fetch, setFetch] = useState (0);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => setPokemon(response.data.results))
    
    }, [fetch]);

    const refreshPage = () =>{
        setFetch(fetch);
    };

    return(
        <div> 
            <button onClick={refreshPage}>Fetch Pokemon</button>
            {pokemon.length > 0 && pokemon.map((poke, index)=>{
                return(
                    <div key={index}>{poke.name}</div>
                )
            }
            )}
        </div>
        
    )
}


export default Pokemon;