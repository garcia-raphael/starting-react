const PokemonData = ({base, name}) => (
    <div>
        <h1>
          {name.english}
        </h1>
        <table>
          {Object.keys(base).map((key) => {
            return <tr>
                    <td>{key}</td>
                    <td>{base[key]}</td>
                  </tr>
          })}
        </table>
    </div>
  )

export default PokemonData;