import styles from './DesempenhoDoPiloto.module.scss';
import ouro from 'assets/img/icons/medalha_de_ouro.png';
import prata from 'assets/img/icons/medalha_de_prata.png';
import bronze from 'assets/img/icons/medalha_de_bronze.png';

const DesempenhoDoPiloto = () => {
    const indices = {
        pontuacao: 34,
        seguranca: 72,
        conclusao: 95
    }

    return (
        <div className={styles.desempenhoDoPiloto}>
            <h2 className={styles.desempenhoDoPiloto__titulo}>
                Desempenho do piloto
            </h2>
            <div className={styles.desempenhoDoPiloto__indices}>
                <span className={styles.desempenhoDoPiloto__indice}>
                    <h3
                        className={styles.desempenhoDoPiloto__indice__valor}
                        style={indices.pontuacao < 50
                            ? { color: '#ff0000' }
                            : indices.pontuacao < 80
                                ? { color: '#ffff00' }
                                : { color: '#25D366' }}
                    >
                        {indices.pontuacao}%
                    </h3>
                    <p className={styles.desempenhoDoPiloto__indice__legenda}>
                        Taxa de pontuação
                    </p>
                </span>
                <span className={styles.desempenhoDoPiloto__indice}>
                    <h3 
                        className={styles.desempenhoDoPiloto__indice__valor}
                        style={indices.seguranca < 50
                            ? { color: '#ff0000' }
                            : indices.seguranca < 80
                                ? { color: '#ffff00' }
                                : { color: '#25D366' }}
                    >
                        {indices.seguranca}%
                    </h3>
                    <p className={styles.desempenhoDoPiloto__indice__legenda}>
                        Media de segurança
                    </p>
                </span>
                <span className={styles.desempenhoDoPiloto__indice}>
                    <h3 
                        className={styles.desempenhoDoPiloto__indice__valor}
                        style={indices.conclusao < 50
                            ? { color: '#ff0000' }
                            : indices.conclusao < 80
                                ? { color: '#ffff00' }
                                : { color: '#25D366' }}
                    >
                        {indices.conclusao}%
                    </h3>
                    <p className={styles.desempenhoDoPiloto__indice__legenda}>
                        Media de conclusão
                    </p>
                </span>
            </div>
            <div className={styles.desempenhoDoPiloto__resultados}>
                <span className={styles.desempenhoDoPiloto__resultados__result}>
                    <img
                        className={styles.desempenhoDoPiloto__resultados__result__medalha}
                        src={prata}
                        alt="Imagem da medalha"
                    />
                    <p className={styles.desempenhoDoPiloto__resultados__result__legenda}>
                        2º Lugar: 15
                    </p>
                </span>
                <span className={`${styles.desempenhoDoPiloto__resultados__result} ${styles.desempenhoDoPiloto__resultados__result1}`}>
                    <img
                        className={styles.desempenhoDoPiloto__resultados__result__medalha}
                        src={ouro}
                        alt="Imagem da medalha"
                    />
                    <p className={styles.desempenhoDoPiloto__resultados__result__legenda}>
                        Vitórias: 15
                    </p>
                </span>
                <span className={styles.desempenhoDoPiloto__resultados__result}>
                    <img
                        className={styles.desempenhoDoPiloto__resultados__result__medalha}
                        src={bronze}
                        alt="Imagem da medalha"
                    />
                    <p className={styles.desempenhoDoPiloto__resultados__result__legenda}>
                        3º Lugar: 15
                    </p>
                </span>
            </div>
        </div>
    )
}

export default DesempenhoDoPiloto;