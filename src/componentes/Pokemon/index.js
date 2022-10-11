import "./Pokemon.css"

const Pokemon = ({ nome, imagem, categoria }) => {
    return (
        <div className="pokemon">
            <div className="cabecalho">
                <img src={imagem} alt={nome} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{categoria}</h5>
            </div>
        </div>
    )
}

export default Pokemon