import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagem, setImagem] = useState('');
    const [tipo, setTipo] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoPokemonCadastrado({
            nome: nome,
            categoria: categoria,
            imagem: imagem,
            tipo: tipo
        })
        setNome('')
        setCategoria('')
        setImagem('')
        setTipo('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card de um Pokémon</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o nome do seu Pokémon" 
                    valor={nome} 
                    aoAlterado={valor => setNome(valor)} />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Categoria" 
                    placeholder="Digite a categoria do seu Pokémon"
                    valor={categoria}
                    aoAlterado={valor => setCategoria(valor)} />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Tipo" 
                    itens={ props.tipos }
                    valor={tipo}
                    aoAlterado={valor => setTipo(valor)} />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario