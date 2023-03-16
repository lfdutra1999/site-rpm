import DesempenhoDoPiloto from 'componentes/DesempenhoDoPiloto';
import Piloto from 'componentes/Piloto';
import RedesSocial from 'componentes/RedesSocial';
import UltimosResultados from 'componentes/UltimosResultados';
import { Link, Navigate } from 'react-router-dom';
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
                        <Link to='/area-do-piloto/edicao'>Editar Cadastro</Link>
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
        </>
    )
}

export default AreaDoPiloto;