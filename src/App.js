import './App.css';
import pokemon from './pokemon.json'

const PokemonRow = ({pokemon}) => (
  <tr>
    <td>{pokemon.name['english']}</td>
    <td>{pokemon.type.join('/')}</td>
  </tr>
);

function App() {
  return (
    <div style={{
      width: 800,
      paddingTop: "1rem",
      margin: "auto"
    }}>
      <h1 className='title'>
        Pokemon Search
      </h1>
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.slice(0, 50).map((pokemon) => (
          // <tr key={pokemon.id}>
          //   <td>{pokemon.name['english']}</td>
          //   <td>{pokemon.type.join('/')}</td>
          // </tr>
            <PokemonRow key={pokemon.id} pokemon={pokemon} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
