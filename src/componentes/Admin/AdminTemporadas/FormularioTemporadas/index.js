import Botao from 'componentes/Formulario/Botao';
import Campo from 'componentes/Formulario/Campo';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './FormularioTemporadas.module.scss';

const FormularioTemporadas = ({ temporada, aoSubmeter }) => {
    const [nome, setNome] = useState(temporada?.nome)
    const [dtInicio, setDtInicio] = useState(temporada?.dtInicio)
    const [dtFim, setDtFim] = useState(temporada?.dtFim)

    const aoEnviarFormulario = (evento) => {
        evento.preventDefault()
        const novaTemporada = {
            uuid: uuid(),
            nome: nome,
            dtInicio: dtInicio,
            dtFim: dtFim
        }
        if (temporada.uuid) {
            novaTemporada.uuid = temporada.uuid
        }
        

        aoSubmeter(novaTemporada)
    }

    return (
        <form className={styles.formulario} onSubmit={evento => aoEnviarFormulario(evento)}>
        <Campo
            placeholder='Nome:'
            valor={nome}
            obrigatorio={true}
            type='text'
            aoAlterado={valor => setNome(valor)}
        />
        <div className={styles.formulario__datas}>
            <Campo
                label="Data de inicio"
                valor={dtInicio}
                obrigatorio={true}
                type='date'
                aoAlterado={valor => setDtInicio(valor)}
            />
            <Campo
                label="Data de fim"
                valor={dtFim}
                obrigatorio={true}
                type='date'
                aoAlterado={valor => setDtFim(valor)}
            />
        </div>
        <Botao>Confirmar</Botao>
    </form>
    )
}

export default FormularioTemporadas;