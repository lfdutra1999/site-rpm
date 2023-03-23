import Botao from 'componentes/Formulario/Botao';
import Campo from 'componentes/Formulario/Campo';
import UploadImagem from 'componentes/UploadImagem';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

const FormularioCarro = ({ carro, classe, aoSubmeter }) => {
    const [nome, setNome] = useState('')
    const [imagem, setImagem] = useState('')
    useEffect(() => {
        if (carro) {
            setNome(carro.nome)
            setImagem(carro.imagem)
        }
    }, [carro])

    const onSubmit = (evento) => {
        evento.preventDefault()
        if (classe) {
            console.log(classe)
            const novoCarro = {
                uuid: uuid(),
                classe_uuid: classe.uuid,
                nome: nome,
                imagem: imagem
            }
            if (carro?.uuid) {
                novoCarro.uuid = carro.uuid
            }
            aoSubmeter(novoCarro)
        } else {
            alert("Selecione uma classe.")
        }
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
            <Botao>Confirmar</Botao>
        </form>
    )
}


export default FormularioCarro;