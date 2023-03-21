import styles from './Aba.module.scss';

const Aba = ({ children, selecionado, onClick }) => {
    return (
        <div className={styles.aba} onClick={onClick}>
            <span
                className={`${styles.aba__texto} ${selecionado ? styles['aba__selecionado'] : ''}`}
            >
                {children}
            </span>
        </div>
    )
}

export default Aba;