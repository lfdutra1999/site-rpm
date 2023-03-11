import styles from './Patrocinadores.module.scss';
import logo from 'assets/img/icons/RPM.png'

const Patrocinadores = () => {
    return (
        <ul className={styles.patrocinadores}>
            <li className={styles.patrocinadores__item}>
                <img
                    className={styles.patrocinadores__img}
                    src={logo}
                    alt="Logo do patrocinador"
                />
            </li>
            <li className={styles.patrocinadores__item}>
                <img
                    className={styles.patrocinadores__img}
                    src={logo}
                    alt="Logo do patrocinador"
                />
            </li>
            <li className={styles.patrocinadores__item}>
                <img
                    className={styles.patrocinadores__img}
                    src={logo}
                    alt="Logo do patrocinador"
                />
            </li>
            <li className={styles.patrocinadores__item}>
                <img
                    className={styles.patrocinadores__img}
                    src={logo}
                    alt="Logo do patrocinador"
                />
            </li>
            <li className={styles.patrocinadores__item}>
                <img
                    className={styles.patrocinadores__img}
                    src={logo}
                    alt="Logo do patrocinador"
                />
            </li>
            <li className={styles.patrocinadores__item}>
                <img
                    className={styles.patrocinadores__img}
                    src={logo}
                    alt="Logo do patrocinador"
                />
            </li>
            <li className={styles.patrocinadores__item}>
                <img
                    className={styles.patrocinadores__img}
                    src={logo}
                    alt="Logo do patrocinador"
                />
            </li>
        </ul>
    )
}

export default Patrocinadores;