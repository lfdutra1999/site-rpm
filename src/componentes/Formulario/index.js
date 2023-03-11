import Campo from './Campo';
import styles from './Formulario.module.scss';

const Formulario = () => {
    return (
        <form className={styles.Formulario}>
            <Campo
                label='E-mail'
                type='email'
                placeholder='Digite o seu e-mail'
            />

            <Campo
                label='Nome'
                type='text'
                placeholder='Digite o seu nome'
            />

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
                label='Senha'
                type='password'
                placeholder='Crie o sua senha'
            />
            
            <Campo
                label='Confirme sua senha'
                type='password'
                placeholder='Confirme a sua senha'
            />
        </form>
    )
}

export default Formulario;