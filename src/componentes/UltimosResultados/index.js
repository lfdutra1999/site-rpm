import styles from './UltimosResultados.module.scss';
import youtube from 'assets/img/yt.png';

const UltimosResultados = () => {
    const cabecalho = [
        "Temporada",
        "Live",
        "Data",
        "Simulador",
        "GRID",
        "Categoria",
        "Carro",
        "Pole Position",
        "Volta mais rapida",
        "Vencedor",
        "Posicao",
        "Pontos",
    ]

    return (
        <table className={styles.ultimosResultados}>
            <thead>
                <tr>
                    {cabecalho.map((campo, index) => (
                        <th className={styles.ultimosResultados__cabecalho} key={index}>
                            {campo}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr key='1'>
                    <td className={styles.ultimosResultados__campo}>
                        T13
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        <img className={styles.ultimosResultados__ytLogo} src={youtube} alt="icone do youtube" />
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        14/03/2023
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        Automobilista 2
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        LIGTH
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        GT3
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        Mercedes AMG 2020
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        Raul Costa
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        Javier Fodaives
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        Kaijuzão
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        4º
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        18
                    </td>
                </tr>
                <tr key='2'>
                    <td className={styles.ultimosResultados__campo}>
                        T13
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        <img className={styles.ultimosResultados__ytLogo} src={youtube} alt="icone do youtube" />
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        14/03/2023
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        Automobilista 2
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        LIGTH
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        GT3
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        Mercedes AMG 2020
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        Raul Costa
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        Javier Fodaives
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        Kaijuzão
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        4º
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        18
                    </td>
                </tr>
                <tr key='3'>
                    <td className={styles.ultimosResultados__campo}>
                        T13
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        <img className={styles.ultimosResultados__ytLogo} src={youtube} alt="icone do youtube" />
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        14/03/2023
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        Automobilista 2
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        LIGTH
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        GT3
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        Mercedes AMG 2020
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        Raul Costa
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        Javier Fodaives
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        Kaijuzão
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        4º
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        18
                    </td>
                </tr>
                <tr key='4'>
                    <td className={styles.ultimosResultados__campo}>
                        T13
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        <img className={styles.ultimosResultados__ytLogo} src={youtube} alt="icone do youtube" />
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        14/03/2023
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        Automobilista 2
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        LIGTH
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        GT3
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        Mercedes AMG 2020
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        Raul Costa
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        Javier Fodaives
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        Kaijuzão
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        4º
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        18
                    </td>
                </tr>
                <tr key='5'>
                    <td className={styles.ultimosResultados__campo}>
                        T13
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        <img className={styles.ultimosResultados__ytLogo} src={youtube} alt="icone do youtube" />
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        14/03/2023
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        Automobilista 2
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        LIGTH
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        GT3
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        Mercedes AMG 2020
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        Raul Costa
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        Javier Fodaives
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        Kaijuzão
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        4º
                    </td>
                    <td className={styles.ultimosResultados__campo}>
                        18
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default UltimosResultados;