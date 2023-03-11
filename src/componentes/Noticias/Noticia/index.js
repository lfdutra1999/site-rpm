import styles from './Noticia.module.scss';
import noticiaImg from 'assets/img/background/288519201_7992831604067905_4557241596581957077_n.jpg'

const Noticia = () => {
    return (
        <div className={styles.noticia}>
            <img
                className={styles.noticia__img}
                src={noticiaImg}
                alt="Capa da noticia"
            />
            <h2 className={styles.noticia__titulo}>Titulo da noticia</h2>
        </div>
    )
}

export default Noticia;