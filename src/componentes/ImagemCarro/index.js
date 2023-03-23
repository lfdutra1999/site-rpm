import styles from './ImagemCarro.module.scss';

const ImagemCarro = ({ imagem }) => {
    return (
        <img className={styles.imagemClasse}
            src={imagem}
            alt="Imagem do carro"
        />
    )
}

export default ImagemCarro;