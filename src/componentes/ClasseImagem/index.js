import styles from './ClasseImagem.module.scss';

const ClasseImagem = ({ imagem }) => {
    return (
        <img className={styles.imagemClasse}
            src={imagem}
            alt="Imagem da classe"
        />
    )
}

export default ClasseImagem;