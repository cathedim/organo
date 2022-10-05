import './CampoTexto.css'

const CampoTexto = (props) => {

    //Se quiser concatenar props com a string "..."
    //const placeholderModificada = `${props.placeholder}...`
    //<input placeholder={ placeholderModificada }/>

    return (
        <div className="campo-texto">
            <label>{ props.label }</label>
            <input placeholder={ props.placeholder }/>
        </div>
    )
}

export default CampoTexto