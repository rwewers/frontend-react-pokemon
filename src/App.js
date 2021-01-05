import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Pokemon } from './components/Pokemon';
import './App.css';
import logo from './assets/pokemon-logo.png';
import { NavButtons } from './components/NavButtons';

function App() {

    const [pokimons, setPokimons] = useState(null);
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=20,0&offset=0`);

    useEffect(() => {

        async function fetchPokimonList() {
            try {
                const result = await Axios.get(url);

                setPokimons(result.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchPokimonList();
    }, [url]);


    return (
            <>
            {/*    <div className="buttons">*/}
            {/*    <button type="button"  onClick={()=> setUrl(pokimons.previous)}>*/}
            {/*    Vorige*/}
            {/*</button>*/}
            {/*<button type="button" onClick={()=> setUrl(pokimons.next)}>*/}
            {/*    Volgende*/}
            {/*</button>*/}
            {/*    </div>*/}
            <header><img alt="pokemon-logo" src={logo} /></header>
                { pokimons && <NavButtons previousUrl={pokimons.previous} nextUrl={pokimons.next} setUrl={setUrl} />}
            <ul className="pokemon-list">
                {pokimons ? pokimons.results.map(({ name }) => (
                    <li key={name}>
                        <Pokemon name={name} />
                    </li>
                )) : (
                    <h1>loading...</h1>
                )}
            </ul>
                { pokimons && <NavButtons previousUrl={pokimons.previous} nextUrl={pokimons.next} setUrl={setUrl} />}
        </>
    )
}

export default App;