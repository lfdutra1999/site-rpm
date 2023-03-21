import { useEffect, useState } from 'react';
import api from 'services/api';
import FormularioTemporadas from '../FormularioTemporadas';
import styles from './EditarTemporadas.module.scss';

const EditarTemporadas = ({ temporadas, setTemporadas }) => {
    const [temporadaSelecionada, setTemporadaSelecionada] = useState({})



    useEffect(() => {
        console.log(temporadaSelecionada)
    }, [temporadaSelecionada])

    const selecionaTemporada = (uuid) => {
        let temporada = temporadas.filter(temporada => temporada.uuid === uuid)[0]
        setTemporadaSelecionada({ ...temporada })
    }


    const aoSubmeter = (novaTemporada) => {
        console.log(novaTemporada)
        api.put(`/temporada?uuid=${novaTemporada.uuid}`, novaTemporada)
            .then(() => {
                const temporadasAtualizadas = temporadas.filter(temporada => temporada.uuid !== novaTemporada.uuid)
                setTemporadas([...temporadasAtualizadas, novaTemporada])
                alert('Temporada atualizada com sucesso.')

            })
            .catch(erro => {
                console.log('Ocorreu um erro inesperado' + erro)
            })
    }

    return (
        <div className={styles.editarTemporadas}>
            <h2>Editar temporadas</h2>
            <select className={styles.editarTemporadas__selecionar} onChange={evento => selecionaTemporada(evento.target.value)}>
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
            {temporadaSelecionada.uuid && <FormularioTemporadas temporada={temporadaSelecionada} aoSubmeter={aoSubmeter} />}
        </div>
    )
}

export default EditarTemporadas;