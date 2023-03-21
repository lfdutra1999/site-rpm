import Botao from 'componentes/Formulario/Botao';
import Campo from 'componentes/Formulario/Campo';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const FormularioGrid = ({ temporadas, grid, aoSubmeter }) => {
    const [temporadaSelecionada, setTemporadaSelecionada] = useState(temporadas[0])
    const [nome, setNome] = useState(grid?.nome)
    const [simulador, setSimulador] = useState(grid?.simulador)
    const [diaDaSemana, setDiaDaSemana] = useState(grid?.diaDaSemana)
    const [linkOnboard, setLinkOnboard] = useState(grid?.linkOnboard)

    const aoAlterarTemporada = (evento) => {
        const novaTemporada = temporadas.filter(temporada => temporada.uuid === evento.target.value)[0]
        setTemporadaSelecionada({ ...novaTemporada })
        console.log(temporadaSelecionada)
    }

    const onSubmit = (evento) => {
        evento.preventDefault()
        const novoGrid = {
            uuid: uuid(),
            temporada_uuid: temporadaSelecionada.uuid,
            nome: nome,
            simulador: simulador,
            diaDaSemana: diaDaSemana,
            linkOnboard: linkOnboard
        }
        if (grid.uuid) {
            novoGrid.uuid = grid.uuid
        }

        aoSubmeter(novoGrid)
    }

    return (
        <form onSubmit={evento => onSubmit(evento)}>
            <select onChange={evento => aoAlterarTemporada(evento)}>
                <option value={null}>Selecione uma temporada</option>
                {temporadas.map(temporada => (
                    <option
                        key={temporada.uuid}
                        value={temporada.uuid}
                    >
                        {temporada.nome}
                    </option>
                ))}
            </select>
            <Campo
                placeholder='Nome:'
                valor={nome}
                type='text'
                obrigatorio={true}
                aoAlterado={valor => setNome(valor)}
            />
            <Campo
                placeholder='Simulador:'
                valor={simulador}
                type='text'
                obrigatorio={true}
                aoAlterado={valor => setSimulador(valor)}
            />
            <Campo
                placeholder='Dia da semana:'
                valor={diaDaSemana}
                type='text'
                obrigatorio={true}
                aoAlterado={valor => setDiaDaSemana(valor)}
            />
            <Campo
                placeholder='Link Onboard'
                valor={linkOnboard}
                type='link'
                obrigatorio={true}
                aoAlterado={valor => setLinkOnboard(valor)}
            />
            <Botao>Confirmar</Botao>
        </form>
    )
}


export default FormularioGrid;