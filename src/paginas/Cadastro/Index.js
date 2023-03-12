import Formulario from 'componentes/Formulario';
import styles from './Cadastro.module.scss';

const Cadastro = ({ imagem, setImagem }) => {
    return (
        <section className={styles.principal}>
            Tela de cadastro...
            <div className={styles.principal__formulario}>
                <Formulario
                    imagem={imagem}
                    setImagem={setImagem}
                />
            </div>
        </section>
    )
}

export default Cadastro;