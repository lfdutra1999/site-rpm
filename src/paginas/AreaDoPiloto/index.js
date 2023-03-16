import DesempenhoDoPiloto from 'componentes/DesempenhoDoPiloto';
import Piloto from 'componentes/Piloto';
import Pilotos from 'componentes/Pilotos';
import RedesSocial from 'componentes/RedesSocial';
import UltimosResultados from 'componentes/UltimosResultados';
import { Navigate } from 'react-router-dom';
import getPilotos from 'services/getPilotos.service';
import styles from './AreaDoPiloto.module.scss';

const AreaDoPiloto = ({ logado, piloto, setPiloto, pilotos, setPilotos }) => {
    if (!logado) {
        return <Navigate replace to="/login" />;
    }
    return (
        <>
            <section className={styles.principal}>
                <div className={styles.principal__piloto}>
                    <div className={styles.principal__piloto__card}>
                        <Piloto
                            piloto={piloto}
                            setPiloto={setPiloto}
                        />
                        <RedesSocial />
                    </div>
                    <DesempenhoDoPiloto />
                </div>
            </section>
            <section className={styles.ultimosResultados}>
                <h2 className={styles.ultimosResultados__titulo}>
                    Histórico de Corridas:
                </h2>
                <UltimosResultados />
            </section>
            <section className={styles.outrosPilotos}>
                <Pilotos pilotos={pilotos} setPilotos={setPilotos} />
            </section>
        </>
    )
}

export default AreaDoPiloto;