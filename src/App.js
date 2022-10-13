import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Tipo from './componentes/Tipo';

function App() {

  const tipos = [
    {
      nome: 'Bug',
      corPrimaria: '#7CBD44',
      corSecundaria: '#ACDF87'
    },
    {
      nome: 'Dragon',
      corPrimaria: '#4C00B0',
      corSecundaria: '#B19CD8'
    },
    {
      nome: 'Electric',
      corPrimaria: '#FFD300',
      corSecundaria: '#F8E472'
    },
    {
      nome: 'Fighting',
      corPrimaria: '#522915',
      corSecundaria: '#9A7B4F'
    },
    {
      nome: 'Fire',
      corPrimaria: '#FF0800',
      corSecundaria: '#F69697'
    },
    {
      nome: 'Flying',
      corPrimaria: '#6050DC',
      corSecundaria: '#CCCCFF'
    },
    {
      nome: 'Ghost',
      corPrimaria: '#3F1A48',
      corSecundaria: '#6A4D71'
    },
    {
      nome: 'Grass',
      corPrimaria: '#46A518',
      corSecundaria: '#9DC183'
    },
    {
      nome: 'Ground',
      corPrimaria: '#F4BC1C',
      corSecundaria: '#FDD071'
    },
    {
      nome: 'Ice',
      corPrimaria: '#89CFF0',
      corSecundaria: '#D8F9FF'
    },
    {
      nome: 'Normal',
      corPrimaria: '#808080',
      corSecundaria: '#BEBEBE'
    },
    {
      nome: 'Poison',
      corPrimaria: '#9C27B0',
      corSecundaria: '#C47DD0'
    },
    {
      nome: 'Psychic',
      corPrimaria: '#FF93AC',
      corSecundaria: '#FC3468'
    },
    {
      nome: 'Rock',
      corPrimaria: '#D6AF78',
      corSecundaria: '#E7D0B0'
    },
    {
      nome: 'Water',
      corPrimaria: '#59BFFF',
      corSecundaria: '#BFE6FF'
    },
  ]

  const [pokemons, setPokemons] = useState([]);

  const aoNovoPokemonAdicionado = (pokemon) => {
    //debugger
    setPokemons([...pokemons, pokemon]);    
  }

  return (
    <div className="App">
      {/*<Banner />*/}
      <Formulario tipos={tipos.map(tipo => tipo.nome)} aoPokemonCadastrado={pokemon => aoNovoPokemonAdicionado(pokemon)} />
      
      {tipos.map(tipo => <Tipo 
        key={tipo.nome} 
        nome={tipo.nome} 
        corPrimaria={tipo.corPrimaria} 
        corSecundaria={tipo.corSecundaria}
        pokemons={pokemons.filter(pokemon => pokemon.tipo === tipo.nome)} 
      />)}

    </div>
  );
}

export default App;
