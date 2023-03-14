import styles from './Campo.module.scss';

const Campo = ({ type = 'text', placeholder, valor, aoAlterado, obrigatorio = false }) => {
    return (
        <div className={styles.campo}>
            <input
                type={type}
                value={valor}
                onChange={evento => aoAlterado(evento.target.value)}
                required={obrigatorio}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Campo;