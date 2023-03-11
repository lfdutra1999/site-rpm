import LinkInterno from 'componentes/LinkInterno';
import ProximasEtapas from 'componentes/ProximasEtapas';
import { Outlet } from 'react-router-dom';
import styles from './PaginaPadrao.module.scss';

const PaginaPadrao = () => {
    // const [indexs, setIndex] = useState([1, 2, 3, 4, 5, 6]);

    // const paraTras = () => {
    //     let newIndexs = indexs
    //     newIndexs.pop()
    //     newIndexs.unshift(indexs[0] - 1)
    //     console.log(newIndexs)
    //     setIndex(newIndexs)
    // }

    // const paraFrente = () => {
    //     let newIndexs = indexs
    //     newIndexs.shift()
    //     newIndexs.push(indexs[4] + 1)
    //     console.log(newIndexs)
    //     setIndex(newIndexs)
    // }

    return (
        <>
            <header className={styles.cabecalho}>
                <div className={styles.cabecalho__container}>
                    <ProximasEtapas />
                </div>
                <div className={styles.cabecalho__container}>
                    <LinkInterno path={"areaPiloto"} estilo="botao-1">
                        Área do piloto
                    </LinkInterno>
                </div>
            </header>

            <Outlet />
        </>
    )
}

export default PaginaPadrao