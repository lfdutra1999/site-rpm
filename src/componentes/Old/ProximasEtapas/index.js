import styles from './ProximasEtapas.module.scss';
import classe from 'assets/img/class/gt3_ams2.webp';
import BotaoLink from 'componentes/BotaoLink';

const ProximasEtapas = ({ etapaSel, setEtapa }) => {
    const etapas = [
        {
            id: 1,
            nome: "Etapa 1",
            pista: "Silverstone",
            pais: "Gra-Bretanha"
        },
        {
            id: 2,
            nome: "Etapa 2",
            pista: "Bathurst",
            pais: "Monte Panorama"
        },
        {
            id: 3,
            nome: "Etapa 3",
            pista: "Interlagos",
            pais: "Brasil"
        },
        {
            id: 4,
            nome: "Etapa 4",
            pista: "Jerez",
            pais: "Espanha"
        },
        {
            id: 5,
            nome: "Etapa 5",
            pista: "Kyalami",
            pais: "Africa do sul"
        }
    ]
    console.log(`assets/img/tracks/${etapaSel.pista}.png`)
    const etapaSelecionada = (etapaSelect) => (setEtapa(etapaSelect));


    return (
        <div className={styles.proximasEtapas}>
            <ul className={styles.proximasEtapas__grids}>
                <li className={`${styles.grid} ${styles.grid_ativo}`}>
                    AMS2 - LIGHT
                </li>
                <li className={styles.grid}>
                    AC - F3 Series
                </li>
                <li className={styles.grid}>
                    ACC - PRO-AM
                </li>
                <li className={styles.grid}>
                    AC - WORLD SERIES
                </li>
            </ul>
            <div className={styles.proximasEtapas__corpo}>
                <ul className={styles.proximasEtapas__corpo__etapas}>
                    {etapas.map(etapa => (
                        <li
                            className={`${styles.etapa} ${() => etapaSel.id === etapa.id ? styles.etapa_ativa : ''}`}
                            key={etapa.id}
                            onClick={() => etapaSelecionada(etapa)}
                        >
                            {etapa.nome}
                        </li>
                    ))}
                </ul>
                <div className={styles.proximasEtapas__corpo__infos} >
                    <div className={styles.data}>
                        <p className={styles.data__dia}>
                            <span className={styles.data__dia__span}>27</span>
                        </p>
                        <p className={styles.data__mes}>Fevereiro</p>
                    </div>
                    <div className={styles.pistaPais}>
                        <p className={styles.pistaPais__pista}>{etapaSel.pista}</p>
                        <p className={styles.pistaPais__pais}>{etapaSel.pais}</p>
                    </div>
                    <img
                        className={styles.classe}
                        src={classe}
                        alt="Imagem da classe"
                    />
                </div>
                <img
                    className={styles.proximasEtapas__corpo__pistaImg}
                    src={`assets/img/tracks/${etapaSel.pista}.png`}
                    alt="Imagem da pista"
                />
                <p className={styles.proximasEtapas__corpo__texto}>Faltam Apenas</p>
                <div className={styles.proximasEtapas__corpo__cronometro}>
                    <p>Cronometro Aqui</p>
                </div>
            </div>
            <div className={styles.proximasEtapas__rodape}>
                <BotaoLink estilo="whatsapp" link="/">INFORMAÇÕES DO GRID</BotaoLink>
            </div>
        </div>
    )
}

export default ProximasEtapas;