import { useState } from 'react';
import Botao from '../Botao';
import Campo from '../Campo';
import styles from '../Formulario.module.scss';
import Logar from 'services/Login';
import  { redirect as Redirect } from 'react-router-dom'

const FormularioLogin = ({ logado, setLogado, piloto, setPiloto }) => {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const logar = (evento) => {
        evento.preventDefault()
        Logar(login, senha, setLogado, setPiloto)
        if (logado) {
            <Redirect to={'/area-do-piloto'} />
        }
    }


    return (
        <form className={styles.formulario} onSubmit={logar}>
            <h3 className={styles.formulario__titulo}>
                COLOQUE SEU LOGIN & SENHA
            </h3>
            <span className={styles.formulario__container__campo}>
                <Campo
                    placeholder='Login:'
                    valor={login}
                    obrigatorio={true}
                    type='text'
                    aoAlterado={valor => setLogin(valor)}
                />
            </span>
            <span className={styles.formulario__container__campo}>
                <Campo
                    placeholder='Senha:'
                    valor={senha}
                    obrigatorio={true}
                    type='password'
                    aoAlterado={valor => setSenha(valor)}
                />
            </span>
            <Botao>Fazer Login</Botao>
        </form>
    )
}

export default FormularioLogin;