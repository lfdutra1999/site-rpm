import styles from './EventosDestaque.module.scss';
import proxima from 'assets/img/icons/next_arrow.png';
import anterior from 'assets/img/icons/previous_arrow.png';

const EventosDestaque = ({ youtubeID, paraFrente, paraTras }) => {
    return (
        <div className={styles.eventosDestaque}>
            <h2 className={styles.eventosDestaque__titulo}>Eventos em destaque:</h2>
            <iframe className={styles.eventosDestaque__video}
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}>
            </iframe>
            <div className={styles.eventosDestaque__botoes}>
                <img
                    className={`${styles.proximasEtapas__setas}`}
                    src={anterior}
                    alt="Seta para trás"
                    onClick={paraTras()}
                />
                <img
                    className={`${styles.proximasEtapas__setas}`}
                    src={proxima}
                    alt="Seta para frente"
                    onClick={paraFrente()}
                />
            </div>
        </div>
    )
}

export default EventosDestaque;