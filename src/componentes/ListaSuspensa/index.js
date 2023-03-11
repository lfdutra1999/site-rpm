import styles from './ListaSuspensa.module.scss';

const ListaSuspensa = () => {
    const opcoes = [
        {
            id: 1,
            nome: "LIGTH - AMS2 GT3"
        },
        {
            id: 2,
            nome: "F3 - AC"
        },
        {
            id: 3,
            nome: "LIGTH-AM - ACC GT3"
        },
        {
            id: 4,
            nome: "WORLD SERIES - AC"
        }
    ]

    return (
        <div className={styles.listaSuspensa}>
            <label className={styles.listaSuspensa__label}>
                GRID
            </label>
            <select className={styles.listaSuspensa__opcoes}>
                {opcoes.map(opcao => (
                    <option
                        className={styles.listaSuspensa__opcao}
                        value={opcao.id}
                        key={opcao.id}
                    >
                        {opcao.nome}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default ListaSuspensa;