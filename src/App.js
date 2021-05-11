import './App.css'
import Card from './Card'
import pokemons from './data.json'

export default function App() {
  //  const firstPokemon = pokemons[0]     --- folgend die saubere Variante
  const { name, images, types } = pokemons[0]

  return (
    <div className="App">
      <Card
        name={name}
        frontImage={images.front}
        backImage={images.back}
        types={types}
      />
    </div>
  )
}
