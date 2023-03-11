import styles from './TemporadaResumo.module.scss';

const TemporadaResumo = () => {
    return (
        <div className={styles.temporadaResumo}>
            <div className={styles.temporadaResumo__cabecalho}>
                <div className={styles.temporadaResumo__cabecalho__informacoes}>
                    <h2 className={styles.temporadaResumo__cabecalho__titulo}>
                        LIGHT - T14
                    </h2>
                    <h3 className={styles.temporadaResumo__cabecalho__subtitulo}>
                        Stock Car 2019 - AMS2
                    </h3>
                </div>
                <div className={styles.temporadaResumo__cabecalho__duracao}>
                    <h3 className={styles.temporadaResumo__cabecalho__data}>
                        Nov/Dez 2022
                    </h3>
                </div>
            </div>
            <div className={styles.temporadaResumo__corpo}>
                <iframe className={styles.temporadaResumo__video}
                    title='Youtube player'
                    sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                    src={`https://youtube.com/embed/NE64P66fsio?autoplay=0`}>
                </iframe>
            </div>
            <div className={styles.temporadaResumo__rodape}>
                <ul className={styles.temporadaResumo__campeoes}>
                    <li className={styles.temporadaResumo__campeao}>
                        <p className={styles.temporadaResumo__campeao__titulo}>Campeão</p>
                        <p className={styles.temporadaResumo__campeao__piloto}>Marcio Fodaives</p>
                    </li>
                    <li className={styles.temporadaResumo__campeao}>
                        <p className={styles.temporadaResumo__campeao__titulo}>Vice Campeão</p>
                        <p className={styles.temporadaResumo__campeao__piloto}>Marcio Fodaives</p>
                    </li>
                    <li className={styles.temporadaResumo__campeao}>
                        <p className={styles.temporadaResumo__campeao__titulo}>3º Colocado</p>
                        <p className={styles.temporadaResumo__campeao__piloto}>Marcio Fodaives</p>
                    </li>
                </ul>
                <ul className={styles.temporadaResumo__etapas}>
                    <li className={styles.temporadaResumo__etapa}>
                        <p className={styles.temporadaResumo__etapa__texto}>
                            E1 - Marcio Fodaives
                        </p>
                    </li>
                    <li className={styles.temporadaResumo__etapa}>
                        <p className={styles.temporadaResumo__etapa__texto}>
                            E2 - Marcio Fodaives
                        </p>
                    </li>
                    <li className={styles.temporadaResumo__etapa}>
                        <p className={styles.temporadaResumo__etapa__texto}>
                            E3 - Marcio Fodaives
                        </p>
                    </li>
                    <li className={styles.temporadaResumo__etapa}>
                        <p className={styles.temporadaResumo__etapa__texto}>
                            E4 - Marcio Fodaives
                        </p>
                    </li>
                    <li className={styles.temporadaResumo__etapa}>
                        <p className={styles.temporadaResumo__etapa__texto}>
                            E5 - Marcio Fodaives
                        </p>
                    </li>
                    <li className={styles.temporadaResumo__etapa}>
                        <p className={styles.temporadaResumo__etapa__texto}>
                            E6 - Marcio Fodaives
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TemporadaResumo;