import styles from './Cabecalho.module.scss';
import logo from 'assets/img/icons/RPM.png';

const Cabecalho = ({ etapa, setEtapa }) => {
    return (
        <header className={styles.cabecalho}>
            <img
                className={styles.cabecalho__logo}
                src={logo}
                alt="Logo da RPM Esports."
            />
        </header>
    )
}

export default Cabecalho;