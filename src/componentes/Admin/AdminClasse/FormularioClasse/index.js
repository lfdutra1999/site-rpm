import Botao from 'componentes/Formulario/Botao';
import Campo from 'componentes/Formulario/Campo';
import UploadImagem from 'componentes/UploadImagem';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const FormularioClasse = ({ classe, aoSubmeter }) => {
    const [nome, setNome] = useState('')
    const [imagem, setImagem] = useState('')
    if (classe) {
        setNome(classe.nome)
        setImagem(classe.imagem)
    }

    const onSubmit = (evento) => {
        evento.preventDefault()
        const novaClasse = {
            uuid: uuid(),
            nome: nome,
            imagem: imagem
        }
        if (classe?.uuid) {
            novaClasse.uuid = classe.uuid
        }
        console.log(novaClasse)
        aoSubmeter(novaClasse)
    }

    return (
        <form onSubmit={evento => onSubmit(evento)}>
            <UploadImagem imagem={imagem} setImagem={setImagem} type='classe' />
            <Campo
                placeholder='Nome:'
                valor={nome}
                type='text'
                obrigatorio={true}
                aoAlterado={valor => setNome(valor)}
            />
            <Botao>Confirmar</Botao>
        </form>
    )
}


export default FormularioClasse;