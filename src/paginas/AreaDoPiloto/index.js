import DesempenhoDoPiloto from 'componentes/DesempenhoDoPiloto';
import Piloto from 'componentes/Piloto';
import RedesSocial from 'componentes/RedesSocial';
import UltimosResultados from 'componentes/UltimosResultados';
import { Link, Navigate } from 'react-router-dom';
import styles from './AreaDoPiloto.module.scss';

const AreaDoPiloto = ({ logado, setLogado, admin, setAdmin, piloto, setPiloto }) => {
    if (!logado) {
        return <Navigate replace to="/login" />;
    }

    const logout = () => {
        setLogado(false)
        setAdmin(false)
        setPiloto({})
        return <Navigate replace to="/" />;

    }
    return (
        <>
            <section className={styles.principal}>
                <div className={styles.principal__piloto}>
                    <div className={styles.principal__piloto__card}>
                        <Piloto
                            piloto={piloto}
                            setPiloto={setPiloto}
                            logout={logout}
                            admin={admin}
                            setAdmin={setAdmin}
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
        </>
    )
}

export default AreaDoPiloto;