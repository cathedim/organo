import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    const tipos = [
        'Bug', 'Dragon', 'Electric', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Water'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('Form foi submetido');
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card de um Pokémon</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o nome do seu Pokémon" />
                <CampoTexto obrigatorio={true} label="Categoria" placeholder="Digite a categoria do seu Pokémon" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatorio={true} label="Tipos" itens={ tipos } />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario