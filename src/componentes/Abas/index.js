import styles from './Abas.module.scss';

const Abas = ({ children }) => {
    return (
        <div className={styles.abas}>
            {children}
        </div>
    )
}

export default Abas;