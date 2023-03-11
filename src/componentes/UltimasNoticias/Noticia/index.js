import styles from './Noticia.module.scss';
import imagem from 'assets/img/Noticias/Thumbnail - T16.png';

const Noticia = () => {
    return (
        <div className={styles.noticia}>
            <img
                src={imagem}
                alt="Capa da noticia"
            />
            <div className={styles.noticia__texto}>
                <h3>Piloto Raul Costa vence o 4fun da Copa Petrobrás de Marcas em Cascavel</h3>
                <p>06 de Março de 2023/Forfuns e Eventos.</p>
            </div>
        </div>
    )
}

export default Noticia;