import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card de um Pokémon</h2>
                <CampoTexto label="Nome" placeholder="Digite o nome do seu Pokémon" />
                <CampoTexto label="Tipo" placeholder="Digite o tipo do seu Pokémon" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )
}

export default Formulario