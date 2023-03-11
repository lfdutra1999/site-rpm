import Campo from './Campo';
import styles from './Formulario.module.scss';

const Formulario = () => {
    return (
        <form className={styles.formulario}>
            <Campo
                label='E-mail'
                type='email'
                placeholder='Digite o seu e-mail'
            />

            <ul className={styles.formulario__camposAlinhados}>
                <li className={styles.formulario__camposAlinhados__campo}>
                    <Campo
                        label='Nome'
                        type='text'
                        placeholder='Digite o seu nome'
                    />
                </li>
                <li className={styles.formulario__camposAlinhados__campo}>
                    <Campo
                        label='Data de nascimento.'
                        type='date'
                        placeholder='11/03/2023'
                        valor='11/03/2023'
                    />
                </li>
            </ul>

            <ul className={styles.formulario__camposAlinhados}>
                <li className={styles.formulario__camposAlinhados__campo}>
                    <Campo
                        label='Senha'
                        type='password'
                        placeholder='Crie o sua senha'
                    />
                </li>
                <li className={styles.formulario__camposAlinhados__campo}>
                    <Campo
                        label='Confirme sua senha'
                        type='password'
                        placeholder='Confirme a sua senha'
                    />
                </li>
            </ul>

            <Campo
                label='SteamId'
                type='text'
                placeholder='Digite o seu Steam Id'
            />

            <Campo
                label='WhatsApp'
                type='tel'
                placeholder='Digite o seu WhatsApp'
            />

            <Campo
                label='Chave Pix'
                type='text'
                placeholder='Digite  a chave pix para premiações.'
            />

            <Campo
                label='Instagram'
                type='text'
                placeholder='Digite seu instagram'
            />

            <ul className={styles.formulario__camposAlinhados}>
                <li className={styles.formulario__camposAlinhados__campo}>
                    <Campo
                        label='Cidade'
                        type='text'
                        placeholder='Digite a sua cidade'
                    />
                </li>
                <li className={styles.formulario__camposAlinhados__campo}>
                    <Campo
                        label='Estado'
                        type='text'
                        placeholder='Digite o seu estado'
                    />
                </li>
            </ul>

            <Campo
                label="foto"
            />

            <Campo
                label='Controlador/volante utilizado'
                type='text'
                placeholder='Digite o link do seu canal'
            />

            <Campo
                label='Link do seu canal(Youtube/Twitch)'
                type='text'
                placeholder='Digite o link do seu canal'
            />
        </form>
    )
}

export default Formulario;