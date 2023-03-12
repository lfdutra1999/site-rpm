import styles from './ProximasEtapas.module.scss';
import Etapa from 'componentes/Etapa';
import proxima from 'assets/img/icons/next_arrow.png';
import anterior from 'assets/img/icons/previous_arrow.png';

const ProximasEtapas = ({ indexsCarrosel, setIndexsCarrosel }) => {
    const etapas = [
        {
            id: 1,
            nome: "Etapa 1",
            pista: "Silverstone",
            pais: "Gra-Bretanha",
            grid: 'LIGHT',
            dataHora: '16/02 21:00'
        },
        {
            id: 2,
            nome: "Etapa 2",
            pista: "Bathurst",
            pais: "Monte Panorama",
            grid: 'LIGHT',
            dataHora: '23/02 21:00'
        },
        {
            id: 3,
            nome: "Etapa 3",
            pista: "Interlagos",
            pais: "Brasil",
            grid: 'LIGHT',
            dataHora: '02/03 21:00'
        },
        {
            id: 4,
            nome: "Etapa 4",
            pista: "Jerez",
            pais: "Espanha",
            grid: 'LIGHT',
            dataHora: '09/03 21:00'
        },
        {
            id: 5,
            nome: "Etapa 5",
            pista: "Kyalami",
            pais: "Africa do sul",
            grid: 'LIGHT',
            dataHora: '15/03 21:00'
        },
        {
            id: 6,
            nome: "Etapa 6",
            pista: "Curitiba",
            pais: "Brasil",
            grid: 'LIGHT',
            dataHora: '22/03 21:00'
        }
        ,
        {
            id: 7,
            nome: "Etapa 7",
            pista: "Daytona",
            pais: "EUA",
            grid: 'LIGHT',
            dataHora: '29/03 21:00'
        },
        {
            id: 8,
            nome: "Etapa 8",
            pista: "Ibarra",
            pais: "Italia",
            grid: 'LIGHT',
            dataHora: '05/04 21:00'
        },
        {
            id: 9,
            nome: "Etapa 9",
            pista: "La_Sarthe",
            pais: "França",
            grid: 'LIGHT',
            dataHora: '12/04 21:00'
        },
        {
            id: 10,
            nome: "Etapa 10",
            pista: "Zandvoord",
            pais: "Holanda",
            grid: 'LIGHT',
            dataHora: '19/04 21:00'
        }
    ]

    const paraTras = () => {
        if (indexsCarrosel[0] !== 1) {
            let newIndexs = [...indexsCarrosel]
            newIndexs.pop()
            newIndexs.unshift(indexsCarrosel[0] - 1)
            setIndexsCarrosel(newIndexs)
        }
    }

    const paraFrente = () => {
        if (indexsCarrosel[indexsCarrosel.length - 1] !== etapas[etapas.length - 1].id) {
            let newIndexs = [...indexsCarrosel]
            newIndexs.shift()
            newIndexs.push(indexsCarrosel[5] + 1)
            setIndexsCarrosel(newIndexs)
        }
    }

    function renderizaEtapa(etapa) {
        if (etapa.id >= indexsCarrosel[0] && etapa.id <= indexsCarrosel[indexsCarrosel.length - 1]) {
            return true
        }
        return false
    }

    return (
        <div className={styles.proximasEtapas}>
            <img
                className={`${styles.proximasEtapas__setas}`}
                src={anterior}
                alt="Seta para trás"
                onClick={() => paraTras()}
            />
            <ul className={styles.proximasEtapas__lista}>
                {etapas.map(etapa => (renderizaEtapa(etapa)
                    ? <li className={styles.proximasEtapas__etapa} key={etapa.id}>
                        <Etapa etapa={etapa} />
                    </li>
                    : ''
                ))}
            </ul>
            <img
                className={`${styles.proximasEtapas__setas}`}
                src={proxima}
                alt="Seta para frente"
                onClick={() => paraFrente()}
            />
        </div>
    )
}

export default ProximasEtapas;