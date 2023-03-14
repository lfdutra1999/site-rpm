import FormularioLogin from 'componentes/Formulario/Login';
import Logo from 'componentes/Logo';
import styles from './Login.module.scss';

const Login = ({ piloto, setPiloto, logado, setLogado }) => {
    return (
        <section className={styles.principal}>
            <Logo />
            <h2 className={styles.principal__titulo}>
                FAÇA LOGIN
            </h2>
            <FormularioLogin
                logado={logado}
                setLogado={setLogado}
                piloto={piloto}
                setPiloto={setPiloto}
            />
        </section>
    )
}

export default Login;