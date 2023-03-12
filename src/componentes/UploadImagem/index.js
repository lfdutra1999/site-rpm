import styles from './UploadImagem.module.scss';
import perfil from 'assets/img/icons/perfil.jpg';
import { useState } from 'react';

const UploadImagem = ({ imagem, setImagem }) => {



    const getImagem = (evento) => {
        const teste = URL.createObjectURL(evento.target.files[0])
        setImagem(teste)
        console.log(imagem)
    }

    return (
        <div className={styles.uploadImagem}>
            <img
                className={styles.uploadImagem__previewImagem}
                src={imagem ? imagem : perfil}
                alt="imagem de perfil"
            />
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