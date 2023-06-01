import { useState } from 'react'
import PokemonsViewer from './components/PokemonsViewer/PokemonsViewer'
import Layout from './Layout'
import css from './App.module.css'
import PokemonCard from './components/Card/PokemonCard'

function App() {
  const [openPokemonViewer, setOpenPokemonViewer] = useState(false)
  const [pokemonsData , setPokemonsData] = useState([])
  const handleOpenPokemonViewer = () => {
    setOpenPokemonViewer(openPokemonViewer => !openPokemonViewer)
  }

  const [suscription, setSuscription] = useState(undefined)
  const [errorForm, setErrorForm] = useState(false)

  const submitInscription = (e) => {
    e.preventDefault()
    let error = ""
    const name = e.target.name.value
    if(name.length < 3){
      error = "El nombre debe tener al menos 3 caracteres. "
    }
    const pokemons = pokemonsData
    if(pokemons.length < 1){
      error += "Debe seleccionar algun pokemon"
    }
    const suscription = {name, pokemons}
    if(error === "") setSuscription(suscription)
    else setErrorForm(error)
  }

  const pokemonsHandle = (pokemons) => {
    setPokemonsData(pokemons)
  }

  return (
    <Layout title={"Pokemons"}>
      {!suscription && <div style={{width: "100%"}}>
        <h2>
          Inscribite al duelo pokemon
        </h2>
        
        <form onSubmit={submitInscription}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          <label htmlFor="color">Pokemons</label>
          <button type="button" onClick={handleOpenPokemonViewer}>Seleccionar Pokemons</button>
          <p>
            Pokemons seleccionados:
          </p>
          <div style={{display: "flex", gap: "10px"}}>
            {pokemonsData.map(pokemon => 
            <PokemonCard data={pokemon} />
            )}
          </div>
          <button type="submit">Submit</button>
        </form>

        <h4 style={{color: "var(--color-error)"}}>{errorForm}</h4>
      </div>}

        {suscription && <div>
          <h2 style={{color: "var(--color-success)"}}>
            Felicitaciones!, esta es tu ficha de inscripcion:
          </h2>
          <h3>Nombre: {suscription.name}</h3>
          <div style={{display: "flex", gap: "10px"}}>
            {suscription.pokemons.map(pokemon => 
            <PokemonCard data={pokemon} />
            )}
          </div>
        </div>}
        

      <PokemonsViewer open={openPokemonViewer} setOpen={handleOpenPokemonViewer} pokemonsHandle={pokemonsHandle}/>
    </Layout>
  )
}

export default App
