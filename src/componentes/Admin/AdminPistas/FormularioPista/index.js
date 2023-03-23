import Botao from 'componentes/Formulario/Botao';
import Campo from 'componentes/Formulario/Campo';
import UploadImagem from 'componentes/UploadImagem';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

const FormularioPista = ({ pista, aoSubmeter }) => {
    const [nome, setNome] = useState('')
    const [pais, setPais] = useState('')
    const [imagem, setImagem] = useState('')
    useEffect(() => {
        if (pista) {
            setNome(pista.nome)
            setPais(pista.pais)
            setImagem(pista.imagem)
        }
    }, [pista])

    const onSubmit = (evento) => {
        evento.preventDefault()
        const novaPista = {
            uuid: uuid(),
            nome: nome,
            pais: pais,
            imagem: imagem
        }
        if (pista?.uuid) {
            novaPista.uuid = pista.uuid
        }
        aoSubmeter(novaPista)
    }

    return (
        <form onSubmit={evento => onSubmit(evento)}>
            <UploadImagem imagem={imagem} setImagem={setImagem} type='carro' />
            <Campo
                placeholder='Nome:'
                valor={nome}
                type='text'
                obrigatorio={true}
                aoAlterado={valor => setNome(valor)}
            />
            <Campo
                placeholder='Pais:'
                valor={pais}
                type='text'
                obrigatorio={true}
                aoAlterado={valor => setPais(valor)}
            />
            <Botao>Confirmar</Botao>
        </form>
    )
}


export default FormularioPista;