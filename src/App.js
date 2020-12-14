import React, {useState} from 'react';
import './App.css';
import axios from "axios";

function App() {
    const [pokemons, setPokemons] = useState(null);
    async function fetchdata(){

        try{
            const result = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
            console.log(result);
            setPokemons(result.data.results);
        } catch(e){
            console.error(e);
        }
    }
    return(
        <div>
            <button type="button" onClick={fetchdata}>
                Haal de pokemons op!
            </button>
            <ul>

                {pokemons && pokemons.map((pokemon)=>{

                    return <li>{pokemon.name}</li>

                } ) }
            </ul>

        </div>
    );
}


export default App;
