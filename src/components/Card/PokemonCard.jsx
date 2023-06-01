import { useState } from 'react'
import Card from './Card'
import css from './PokemonCard.module.css'

const PokemonCard = ({children, url, selectPokemon, data = undefined}) => {
    const [pokemonData, setPokemonData] = useState({})
    const [selected, setSelected ] = useState(false)
    const getAllPokemonData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        const pokeData = { id: data.id, name: data.name, img: data.sprites.front_default}
        setPokemonData(pokeData)
        selectPokemon(pokeData)
        setSelected(true)
        
    }

    return (
        <>
            {data ?
            <Card style={{borderColor: "var(--color-success)" }} onClick={() => getAllPokemonData()}>
                <p className={css.id}>{data.id}</p>
                <div className={css.info} >
                    <h2>
                        {data.name}
                    </h2>
                    <img src={data.img} height={100} width={100}  />
                </div>
            </Card>
            : 
            <Card style={{borderColor: selected ? "var(--color-success)" : "var(--color-primary)" }} onClick={() => getAllPokemonData()}>
                <p className={css.id}>{pokemonData.id ? pokemonData.id : "?"}</p>
                <div className={css.info} >
                    <h2>
                        {children}
                    </h2>
                    {pokemonData?.img && <img src={pokemonData.img} height={100} width={100}  />}
                </div>
            </Card>}
        </>
        
    )
}

export default PokemonCard