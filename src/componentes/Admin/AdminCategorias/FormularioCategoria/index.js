import Botao from 'componentes/Formulario/Botao';
import Campo from 'componentes/Formulario/Campo';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

const FormularioCategoria = ({ categoria, grid, aoSubmeter }) => {
    const [nome, setNome] = useState('')
    const [horario, setHorario] = useState('')
    useEffect(() => {
        if (categoria) {
            setNome(categoria.nome)
            setHorario(categoria.horario)
        }
    }, [categoria])

    const onSubmit = (evento) => {
        evento.preventDefault()
        const novaCategoria = {
            uuid: uuid(),
            gridUuid: grid.uuid,
            nome: nome,
            horario: horario,
        }
        if (categoria?.uuid) {
            novaCategoria.uuid = categoria.uuid
        }
        aoSubmeter(novaCategoria)
    }

    return (
        <form onSubmit={evento => onSubmit(evento)}>
            <Campo
                placeholder='Nome:'
                valor={nome}
                type='text'
                obrigatorio={true}
                aoAlterado={valor => setNome(valor)}
            />
            <Campo
                placeholder='Horario:'
                valor={horario}
                type='hour'
                obrigatorio={true}
                aoAlterado={valor => setHorario(valor)}
            />
            <Botao>Confirmar</Botao>
        </form>
    )
}


export default FormularioCategoria;