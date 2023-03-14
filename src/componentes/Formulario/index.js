import { useState } from 'react';
import Botao from './Botao';
import Campo from './Campo';
import styles from './Formulario.module.scss';
import { v4 as uuid } from 'uuid';
import CadastrarPiloto from 'services/CadastrarPiloto';
import { useNavigate } from 'react-router-dom';

const Formulario = () => {
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [nickname, setNickname] = useState('')
    const [steamid, setSteamid] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [chavepix, setChavePix] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [controlador, setControlador] = useState('')
    const [linkcanal, setLinkcanal] = useState('')
    const navigate = useNavigate()

    const cadastrar = (evento) => {
        evento.preventDefault()
        var bcrypt = require('bcryptjs');
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(senha, salt);
        const piloto = {
            "uuid": uuid(),
            "login": login,
            "senha": hash,
            "nome": nome,
            "sobrenome": sobrenome,
            "nickname": nickname,
            "steamid": steamid,
            "whatsapp": whatsapp,
            "chavepix": chavepix,
            "cidade": cidade,
            "estado": estado,
            "controlador": controlador,
            "linkcanal": linkcanal
        }

        CadastrarPiloto(piloto)
        navigate('/login')

    }

    return (
        <form className={styles.formulario} onSubmit={cadastrar}>
            <section>
                <h3 className={styles.formulario__titulo}>
                    INFORMAÇÕES ESSENCIAIS
                </h3>
                <div className={styles.formulario__container}>
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
                    <span className={styles.formulario__container__campo}>
                        <Campo
                            placeholder='Nome:'
                            valor={nome}
                            obrigatorio={true}
                            type='text'
                            aoAlterado={valor => setNome(valor)}
                        />
                    </span>
                    <span className={styles.formulario__container__campo}>
                        <Campo
                            placeholder='Sobrenome:'
                            valor={sobrenome}
                            obrigatorio={true}
                            type='text'
                            aoAlterado={valor => setSobrenome(valor)}
                        />
                    </span>
                    <span className={styles.formulario__container__campo}>
                        <Campo
                            placeholder='Nickname(Nome da steam):'
                            valor={nickname}
                            obrigatorio={true}
                            type='text'
                            aoAlterado={valor => setNickname(valor)}
                        />
                    </span>
                    <span className={styles.formulario__container__campo}>
                        <Campo
                            placeholder='SteamId(GUID):'
                            valor={steamid}
                            obrigatorio={true}
                            type='text'
                            aoAlterado={valor => setSteamid(valor)}
                        />
                    </span>
                    <span className={styles.formulario__container__campo}>
                        <Campo
                            placeholder='WhatsApp (com DDD):'
                            valor={whatsapp}
                            obrigatorio={true}
                            type='tel'
                            aoAlterado={valor => setWhatsapp(valor)}
                        />
                    </span>
                    <span className={styles.formulario__container__campo}>
                        <Campo
                            placeholder='Chave pix para premiações:'
                            valor={chavepix}
                            obrigatorio={true}
                            type='text'
                            aoAlterado={valor => setChavePix(valor)}
                        />
                    </span>
                </div>
            </section>
            <section>
                <h3 className={styles.formulario__titulo}>
                    INFORMAÇÕES ADICIONAIS
                </h3>
                <div className={styles.formulario__container}>
                    <span className={styles.formulario__container__campo}>
                        <Campo
                            placeholder='Cidade:'
                            valor={cidade}
                            type='text'
                            aoAlterado={valor => setCidade(valor)}
                        />
                    </span>
                    <span className={styles.formulario__container__campo}>
                        <Campo
                            placeholder='Estado:'
                            valor={estado}
                            type='text'
                            aoAlterado={valor => setEstado(valor)}
                        />
                    </span>
                    <span className={styles.formulario__container__campo}>
                        <Campo
                            placeholder='Controlador:'
                            valor={controlador}
                            type='text'
                            aoAlterado={valor => setControlador(valor)}
                        />
                    </span>
                    <span className={styles.formulario__container__campo}>
                        <Campo
                            placeholder='Link do seu canal:'
                            valor={linkcanal}
                            type='text'
                            aoAlterado={valor => setLinkcanal(valor)}
                        />
                    </span>
                </div>
            </section>
            <Botao>Confirmar</Botao>
        </form >
    )
}

export default Formulario;