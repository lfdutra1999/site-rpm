import Noticia from './Noticia';
import styles from './UltimasNoticas.module.scss';

const UltimasNoticias = () => {
    return (
        <div className={styles.ultimasNoticias}>
            <h2 className={styles.ultimasNoticias__titulo}>
                Ultimas notícias:
            </h2>
            <ul className={styles.ultimasNoticias__noticias}>
                <li className={styles.ultimasNoticias__noticia__item}>
                    <Noticia />
                </li>
                <li className={styles.ultimasNoticias__noticia__item}>
                    <Noticia />
                </li>
                <li className={styles.ultimasNoticias__noticia__item}>
                    <Noticia />
                </li>
            </ul>
        </div>
    )
}

export default UltimasNoticias;