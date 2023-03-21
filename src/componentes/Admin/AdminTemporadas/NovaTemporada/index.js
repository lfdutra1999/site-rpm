import styles from './NovaTemporada.module.scss'
import api from 'services/api';
import FormularioTemporadas from '../FormularioTemporadas';

const NovaTemporda = ({ temporadas, setTemporadas }) => {
    const aoSubmeter = (novaTemporada) => {
        api.post(`/temporada?uuid=${novaTemporada.uuid}`, novaTemporada)
            .then(resposta => {
                console.log(resposta)
                alert('Temporada criada com sucesso.')
                setTemporadas([...temporadas, novaTemporada])
            })
            .catch(erro => {
                console.log('Ocorreu um erro inesperado' + erro)
            })
    }


    return (
        <div className={styles.novaTemporada}>
            <h3 className={styles.novaTemporada__titulo}>
                Criar nova temporada
            </h3>
            <FormularioTemporadas aoSubmeter={aoSubmeter} />
        </div>
    )
}

export default NovaTemporda;