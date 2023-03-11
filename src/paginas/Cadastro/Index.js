import Formulario from 'componentes/Formulario';
import styles from './Cadastro.module.scss';

const Cadastro = () => {
    return (
        <section className={styles.principal}>
            Tela de cadastro...
            <div className={styles.principal__formulario}>
                <Formulario />
            </div>
        </section>
    )
}

export default Cadastro;