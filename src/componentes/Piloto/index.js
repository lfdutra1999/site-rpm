import styles from './Piloto.module.scss';
import getPiloto from 'services/getPiloto.service';
import { useEffect } from 'react';
import ImagemPerfil from 'componentes/ImagemPerfil';

const Piloto = ({ piloto, setPiloto }) => {
    useEffect(() => {
        getPiloto(piloto, setPiloto)
    }, [])

    return (
        <div className={styles.piloto}>
            <div className={styles.piloto__detalhes}>
                <ImagemPerfil />
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