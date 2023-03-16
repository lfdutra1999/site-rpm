import styles from './ImagemPerfil.module.scss';
import perfilPadrao from 'assets/img/icons/perfil.png'

const ImagemPerfil = ({ imagem }) => {
    return (
        <div className={styles.perfil}>
            <img className={styles.perfil__imagem}
                src={imagem ? imagem : perfilPadrao}
                alt='imagem do piloto'
            />
        </div>
    )

}

export default ImagemPerfil;