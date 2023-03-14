import styles from './Logo.module.scss';
import logo from 'assets/img/icons/RPM.png';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img
                className={styles.logo__imagem}
                src={logo}
                alt="Logo da RPM Esports."
            />
        </div>
    )
}

export default Logo;