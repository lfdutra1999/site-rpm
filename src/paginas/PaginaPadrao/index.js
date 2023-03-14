import LinkInterno from 'componentes/LinkInterno';
import ProximasEtapas from 'componentes/ProximasEtapas';
import { Outlet } from 'react-router-dom';
import styles from './PaginaPadrao.module.scss';

const PaginaPadrao = ({ indexsCarrosel, setIndexsCarrosel, logado, setLogado }) => {
    return (
        <>
            <header className={styles.cabecalho}>
                <div className={styles.cabecalho__container}>
                    <ProximasEtapas
                        indexsCarrosel={indexsCarrosel}
                        setIndexsCarrosel={setIndexsCarrosel}
                    />
                </div>
                <div className={styles.cabecalho__container}>
                    <LinkInterno path={logado ? "area-do-piloto" : "login"} estilo="botao-1">
                        {logado ? "Area do piloto" : "Login"}
                    </LinkInterno>
                </div>
            </header>

            <Outlet />
        </>
    )
}

export default PaginaPadrao