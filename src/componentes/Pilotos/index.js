import Piloto from 'componentes/Piloto';
import styles from './Pilotos.modules.scss';

const Pilotos = ({ pilotos }) => {
    return (
        <ul className={styles.pilotos}>
            {pilotos.map(piloto => <Piloto piloto={piloto.piloto} setPiloto={piloto.setPiloto}/>)}
        </ul>
    )

}