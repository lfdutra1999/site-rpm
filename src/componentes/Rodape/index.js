import styles from './Rodape.module.scss';
import logo from 'assets/img/icons/RPM.png';

const Rodape = () => {
    return (
        <footer className={styles.rodape}>
            <img 
                className={styles.rodape__img}
                src={logo}
                alt="Logo da RPM Esports"
            />
            <ul className={styles.rodape__links}>
                <li className={styles.rodape__links__item}>
                    <a className={styles.rodape__links__link} href='/'>
                        Contatos
                    </a>
                </li>
                <li className={styles.rodape__links__item}>
                    <a className={styles.rodape__links__link} href='/'>
                        Todos os links
                    </a>
                </li>
                <li className={styles.rodape__links__item}>
                    <a className={styles.rodape__links__link} href='/'>
                        Seja Membro
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Rodape;