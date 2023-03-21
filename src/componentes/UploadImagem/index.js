import styles from './UploadImagem.module.scss';
import ImagemPerfil from 'componentes/ImagemPerfil';
import ClasseImagem from 'componentes/ClasseImagem';
import { useState } from 'react';


const UploadImagem = ({ type = 'piloto', imagem, setImagem }) => {
    const [imagemPreview, setImagemPreview] = useState('')
    const getImagem = (evento) => {
        const novaImagem = (evento.target.files[0])
        setImagemPreview(URL.createObjectURL(evento.target.files[0]))
        setImagem(novaImagem)
        console.log(novaImagem)
    }

    return (
        <div className={styles.uploadImagem}>
            {type === 'piloto' ? <ImagemPerfil imagem={imagem} /> : <ClasseImagem imagem={imagemPreview} />}
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