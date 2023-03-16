import Formulario from 'componentes/Formulario';
import styles from './Cadastro.module.scss';
import Logo from 'componentes/Logo';

const Cadastro = ({ setLogado, setPiloto }) => {
    return (
        <section className={styles.principal}>
            <Logo />
            <h2 className={styles.principal__titulo}>
                CRIAR NOVA CONTA
            </h2>
            <div className={styles.principal__formulario}>
                <Formulario setPiloto={setPiloto} setLogado={setLogado} />
            </div>
        </section>
    )
}

export default Cadastro;