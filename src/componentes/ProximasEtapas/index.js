import styles from './ProximasEtapas.module.scss';
import Etapa from 'componentes/Etapa';
import proxima from 'assets/img/icons/next_arrow.png';
import anterior from 'assets/img/icons/previous_arrow.png';

const ProximasEtapas = () => {
    const etapas = [
        {
            id: 1,
            nome: "Etapa 1",
            pista: "Silverstone",
            pais: "Gra-Bretanha",
            grid: 'LIGTH',
            dataHora: '16/02 21:00'
        },
        {
            id: 2,
            nome: "Etapa 2",
            pista: "Bathurst",
            pais: "Monte Panorama",
            grid: 'LIGTH',
            dataHora: '16/02 21:00'
        },
        {
            id: 3,
            nome: "Etapa 3",
            pista: "Interlagos",
            pais: "Brasil",
            grid: 'LIGTH',
            dataHora: '16/02 21:00'
        },
        {
            id: 4,
            nome: "Etapa 4",
            pista: "Jerez",
            pais: "Espanha",
            grid: 'LIGTH',
            dataHora: '16/02 21:00'
        },
        {
            id: 5,
            nome: "Etapa 5",
            pista: "Kyalami",
            pais: "Africa do sul",
            grid: 'LIGTH',
            dataHora: '16/02 21:00'
        },
        {
            id: 6,
            nome: "Etapa 6",
            pista: "Kyalami",
            pais: "Africa do sul",
            grid: 'LIGTH',
            dataHora: '16/02 21:00'
        }
        // ,
        // {
        //     id: 7,
        //     nome: "Etapa 7",
        //     pista: "Kyalami",
        //     pais: "Africa do sul",
        //     grid: 'LIGTH',
        //     dataHora: '16/02 21:00'
        // },
        // {
        //     id: 8,
        //     nome: "Etapa 8",
        //     pista: "Kyalami",
        //     pais: "Africa do sul",
        //     grid: 'LIGTH',
        //     dataHora: '16/02 21:00'
        // },
        // {
        //     id: 9,
        //     nome: "Etapa 9",
        //     pista: "Kyalami",
        //     pais: "Africa do sul",
        //     grid: 'LIGTH',
        //     dataHora: '16/02 21:00'
        // },
        // {
        //     id: 10,
        //     nome: "Etapa 10",
        //     pista: "Kyalami",
        //     pais: "Africa do sul",
        //     grid: 'LIGTH',
        //     dataHora: '16/02 21:00'
        // }
    ]

    return (
        <div className={styles.proximasEtapas}>
            <img
                className={`${styles.proximasEtapas__setas}`}
                src={anterior}
                alt="Seta para trás"
            // onClick={() => paraTras()}
            />
            <ul className={styles.proximasEtapas__lista}>
                {etapas.map(etapa => (
                    <li className={styles.proximasEtapas__etapa} key={etapa.id}>
                        <Etapa etapa={etapa} />
                    </li>
                ))}
            </ul>
            <img
                className={`${styles.proximasEtapas__setas}`}
                src={proxima}
                alt="Seta para frente"
            // onClick={() => paraFrente()}
            />
        </div>
    )
}

export default ProximasEtapas;