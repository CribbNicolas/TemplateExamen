import PokemonCard from '../Card/PokemonCard'
import css from './PokemonsViewer.module.css'

import { useEffect, useState } from "react"

const PokemonsViewer = ( {pokemonsHandle, open, setOpen} ) => {
    const [pokemons, setPokemons] = useState([])
    const [selectedPokemons, setSelectedPokemons] = useState([])

    const handleSelectedPokemon = () => {
        pokemonsHandle(selectedPokemons)
        setOpen(false)
    }

    const handleCloseModal = () => {
        setSelectedPokemons([])
        setOpen(false)
    }

    const selectPokemon = (pokemon) => {
        setSelectedPokemons([...selectedPokemons, pokemon])
    }


    useEffect(() => {

        setSelectedPokemons([])
        const getPokemons = async () => {
            fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
                .then(response => response.json())
                .then(response => setPokemons(response.results))
        }

        getPokemons()
    }, [open])


    return (
        <>
            {open && 
            <dialog open>
                {pokemons.map(pokemon => 
                    <PokemonCard selectPokemon={selectPokemon} url={pokemon.url} key={pokemon.name}>
                        {pokemon.name}
                    </PokemonCard> 
                )}
            </dialog>
            }
            { open &&
              <div className={css["buttons-wrapper"]}>
                <button onClick={handleCloseModal}>Close</button>
                <button onClick={handleSelectedPokemon}>Ok</button>
            </div>
            }
        </>
    )
}

export default PokemonsViewer