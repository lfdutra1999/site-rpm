import styles from './Botao.module.scss';

const Botao = ({ children }) => {
    return (
        <button className={styles.botao}>
            {children}
        </button>
    )
}

export default Botao;