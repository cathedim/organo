import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Tipo from './componentes/Tipo';

function App() {

  const tipos = [
    {
      nome: 'Bug',
      corPrimaria: '#86DC3D',
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
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Ghost',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Grass',
      corPrimaria: '#4CBB17',
      corSecundaria: '#9DC183'
    },
    {
      nome: 'Ground',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Ice',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Normal',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Poison',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Psychic',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Rock',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Water',
      corPrimaria: '#59BFFF',
      corSecundaria: '#BFE6FF'
    },
  ]

  const [pokemons, setPokemons] = useState([]);

  const aoNovoPokemonAdicionado = (pokemon) => {
    console.log(pokemon);
    setPokemons([...pokemons, pokemon]);    
  }

  return (
    <div className="App">
      <Banner />
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
