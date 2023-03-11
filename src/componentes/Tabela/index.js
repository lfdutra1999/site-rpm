import styles from './Tabela.module.scss';

const Tabela = () => {
    const colunas = [
        "Posição",
        "Equipe",
        "Piloto",
        "Pontos"
    ]

    const dados = [
        {
            "equipe": "Montdata",
            "piloto": "Leo Franco",
            "pontos": "50",
            "posicao": 1
        },
        {
            "equipe": "Montdata",
            "piloto": "Matheus Samuel",
            "pontos": "40",
            "posicao": 2
        },
        {
            "equipe": "RPM Esports",
            "piloto": "Julio Cesar",
            "pontos": "36",
            "posicao": 3
        },
        {
            "equipe": "RPM Esports",
            "piloto": "Luan Costa",
            "pontos": "32",
            "posicao": 4
        },
        {
            "equipe": "Montdata",
            "piloto": "Raul Gobbi",
            "pontos": "28",
            "posicao": 5
        },
        {
            "equipe": "RPM Esports",
            "piloto": "Lucas Tonon",
            "pontos": "24",
            "posicao": 6
        }
    ]

    return (
        <table className={styles.tabela}>
            <thead>
                <tr className={styles.tabela__cabecalho}>
                    {colunas.map(coluna => (
                        <th className={styles.tabela__cabecalho__coluna} key={coluna}>
                            {coluna}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {dados.map(dado => (
                    <tr className={styles.tabela__linha} key={dado.posicao}>
                        <td className={styles.tabela__dado}>{dado.posicao}</td>
                        <td className={styles.tabela__dado}>{dado.equipe}</td>
                        <td className={styles.tabela__dado}>{dado.piloto}</td>
                        <td className={styles.tabela__dado}>{dado.pontos}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Tabela;