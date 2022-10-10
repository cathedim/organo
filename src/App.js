import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {

  const [pokemons, setPokemons] = useState([]);

  const aoNovoPokemonAdicionado = (pokemon) => {
    console.log(pokemon);
    setPokemons([...pokemons, pokemon]);    
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoPokemonCadastrado={pokemon => aoNovoPokemonAdicionado(pokemon)} />
    </div>
  );
}

export default App;
