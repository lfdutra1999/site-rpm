import styles from './UploadImagem.module.scss';
import ImagemPerfil from 'componentes/ImagemPerfil';

const UploadImagem = ({ imagem, setImagem }) => {
    const getImagem = (evento) => {
        const teste = URL.createObjectURL(evento.target.files[0])
        setImagem(teste)
        console.log(imagem)
    }

    return (
        <div className={styles.uploadImagem}>
            <ImagemPerfil imagem={imagem} />
            <input className={styles.uploadImagem__input} type='file' id='imagem' onChange={(event) => getImagem(event)} />
            <label htmlFor='imagem'>
                <span className={styles.uploadImagem__selecionarArquivo}>
                    Selecionar a imagem
                </span>
            </label>
        </div>
    )
}

export default UploadImagem;