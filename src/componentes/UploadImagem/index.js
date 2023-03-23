import styles from './UploadImagem.module.scss';
import ImagemPerfil from 'componentes/ImagemPerfil';
import ClasseImagem from 'componentes/ClasseImagem';
import { useEffect, useState } from 'react';
import ImagemCarro from 'componentes/ImagemCarro';


const UploadImagem = ({ type = 'piloto', imagem, setImagem }) => {
    const [imagemPreview, setImagemPreview] = useState()
    useEffect(() => {
        if (!imagem?.name) {
            setImagemPreview(imagem)
        }
    }, [imagem])
    const getImagem = (evento) => {
        const novaImagem = (evento.target.files[0])
        setImagem(novaImagem)
        setImagemPreview(URL.createObjectURL(evento.target.files[0]))
    }

    const tipoImagem = (tipo) => {
        if (tipo === 'piloto') {
            return <ImagemPerfil imagem={imagemPreview} />
        }
        if (tipo === 'classe') {
            console.log('ta aqui')
            return <ClasseImagem imagem={imagemPreview} />
        }
        if (tipo === 'carro') {
            return <ImagemCarro imagem={imagemPreview} />
        } else {
            console.log(':(')
        }
    }

    return (
        <div className={styles.uploadImagem}>
            {tipoImagem(type)}
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