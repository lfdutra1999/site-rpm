import styles from './Piloto.module.scss';
import api from 'services/api';
import { useEffect } from 'react';
import perfilPadrao from 'assets/img/icons/perfil.jpg'

const Piloto = ({ piloto, setPiloto }) => {

    useEffect(() => {
        api
            .get("/piloto?uuid=5f527118-c1a7-11ed-80d3-0242ac110002")
            .then((response) => setPiloto(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, [])

    return (
        <div className={styles.piloto}>
            <img className={styles.piloto__imagem}
                src={perfilPadrao}
                alt='imagem do piloto'
            />
            <h3 className={styles.piloto__titulo}>
                {piloto?.nickname}
            </h3>
            <p>{piloto?.nome} {piloto?.sobrenome}</p>
            <p>{piloto?.cidade} {piloto?.estado}</p>
        </div>
    )
}

export default Piloto;