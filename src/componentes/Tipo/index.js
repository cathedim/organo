import Pokemon from '../Pokemon'
import './Tipo.css'

const Tipo = (props) => {

    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.pokemons.length > 0) && (<section className="tipo" style={css}>
            <h3 style={{ borderColor:props.corPrimaria }}>{props.nome}</h3>
            <div className="pokemons">
                {props.pokemons.map(pokemon => <Pokemon nome={pokemon.nome} categoria={pokemon.categoria} imagem={pokemon.imagem}/>)}
            </div>
        </section>)
    )
}

export default Tipo