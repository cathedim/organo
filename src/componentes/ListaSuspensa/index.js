import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    console.log(props.itens)

    //dentro do <select> também pode ser:
    //{props.itens.map(item => {
    //    return <option>{ item }</option>
    //})}

    return (
        <div className="lista-suspensa">
            <label>{ props.label }</label>
            <select required={props.obrigatorio}>
                { props.itens.map(item => <option key={ item }>{ item }</option>) }
            </select>
        </div>
    )
}

export default ListaSuspensa