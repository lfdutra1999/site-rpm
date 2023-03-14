import styles from './Piloto.module.scss';
import api from 'services/api';
import { useEffect } from 'react';
import perfilPadrao from 'assets/img/icons/perfil.png'

const Piloto = ({ piloto, setPiloto }) => {
    const pilotoAtual = {
        uuid: '45c07211-a118-401a-b17b-ddc6faa56baf'
    }

    useEffect(() => {
        api
            .get(`/piloto?uuid=${pilotoAtual.uuid}`)
            .then((response) => setPiloto(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, [])

    return (
        <div className={styles.piloto}>
            <div className={styles.piloto__detalhes}>
                <div className={styles.piloto__perfil}>
                    <img className={styles.piloto__imagem}
                        src={perfilPadrao}
                        alt='imagem do piloto'
                    />
                </div>
                <h3 className={styles.piloto__titulo}>
                    {piloto?.nickname}
                </h3>
                {piloto.cidade && piloto.estado
                    ? <p className={styles.piloto__informacoes}>
                        {piloto.cidade}/{piloto.estado}
                    </p>
                    : ''}
                {piloto.controlador
                    ? <p className={styles.piloto__informacoes}>
                        {piloto.controlador}
                    </p>
                    : ''}
            </div>
        </div>
    )
}

export default Piloto;