import styles from './HallDaFama.module.scss';
import TemporadaResumo from './TemporadaResumo';

const HallDaFama = () => {
    return (
        <div className={styles.hallDaFama}>
            <div className={styles.hallDaFama__cabecalho}>
                <h3 className={styles.hallDaFama__subtitulo}>ULTIMAS TEMPORADAS</h3>
                <h2 className={styles.hallDaFama__titulo}>HALL DA FAMA</h2>
            </div>
            <ul className={styles.hallDaFama__lista}>
                <li className={styles.hallDaFama__temporada}>
                    <TemporadaResumo />
                </li>
                <li className={styles.hallDaFama__temporada}>
                    <TemporadaResumo />
                </li>
                <li className={styles.hallDaFama__temporada}>
                    <TemporadaResumo />
                </li>
            </ul>

        </div >
    )
}

export default HallDaFama;