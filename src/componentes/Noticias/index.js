import RedesSocial from 'componentes/RedesSocial';
import Noticia from './Noticia';
import styles from './Noticias.module.scss';

const Noticias = () => {
    return (
        <div className={styles.noticias}>
            <h2>Fique por dentro</h2>
            <Noticia />
            <Noticia />
            <Noticia />
            <Noticia />
            <RedesSocial />
        </div>
    )
}

export default Noticias;