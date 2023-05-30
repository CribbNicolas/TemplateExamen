import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

const cardItems = [
  {
    name: "Primer carddd",
    color: "red",
  },
  {
    name: "Second cardddd",
    color: "blue",
  }
]

const defaultCustomCard = {
  name: "Card manejada por Hook",
  color: "yellow"
}

function App() {
  const [customCard, setCustomCard] = useState(defaultCustomCard)

  const cambiarNombre = (e) => {
      setCustomCard(prevState => ({...prevState, name: e.target.value}))
  }
    
  const cambiarColor = (e) => {
      setCustomCard(prevState => ({...prevState, color: e.target.value}))
  }

  return (
    <>
      <p>Cambiando el nombre:</p>
      <input onChange={cambiarNombre} defaultValue={defaultCustomCard.name} />

      <p>Cambiando el color:</p>
      <input onChange={cambiarColor} defaultValue={defaultCustomCard.color}/>

      {cardItems.map((item) => 
        <Card key={item.name} item={item}>
          <h1>Este es el titulo insertado por children</h1>
        </Card>
      )}
      <Card item={customCard}>
      <h1>Este es el titulo insertado por children</h1>
      </Card>
    </>
  )
}

export default App
