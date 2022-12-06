import './App.css'; 
import { useEffect, useState} from 'react';
import PokemonData from './components/PokemonData'
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from './components/PokemonTable'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [filter, filterSet] = useState("")
  const [selectedItem, selectedItemSet] = useState(null)
  const [pokemon, pokemonSet] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/starting-react/pokemon.json')
    .then((response) => response.json())
    .then((responseData) => pokemonSet(responseData))
  })

  return (
    <div style={{
      width: 800,
      paddingTop: "1rem",
      margin: "auto",
    }}>
      <h1 className='title'>
        Pokemon Search
      </h1>
      <PokemonFilter filter={filter} filterSet={filterSet}/>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns:'70% 30%',
          gridGap:'1rem',
        }}
      >
      <PokemonTable pokemon={pokemon} selectedItemSet={selectedItemSet} filter={filter}/>
      {selectedItem && (
        <PokemonData {...selectedItem}/>
      )}
      </div>
    </div>
  );
}

export default App;
