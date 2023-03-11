import styles from './Etapa.module.scss';

const Etapa = ({ etapa }) => {
    return (
        <div className={styles.etapa}>
            <h3 className={styles.etapa__grid}> {etapa.grid} </h3>
            <h4 className={styles.etapa__dataHora}> {etapa.dataHora}</h4>
            <img 
                className={styles.etapa__pista}
                src={`assets/img/tracks/${etapa.pista}.png`}
                alt="Imagem da pista da etapa"
            />
        </div>
    )
}

export default Etapa;