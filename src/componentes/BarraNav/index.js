import LinkInterno from 'componentes/LinkInterno';
import MenuOpcoes from 'componentes/MenuOpcoes';
import styles from './BarraNav.module.scss';

const BarraNav = () => {
    const itensMenu = [
        {
            id: 1,
            nome: "Inicio",
            path: ""
        },
        {
            id: 3,
            nome: "Temporada 17",
            path: "T17",
            submenu: [
                {
                    path: "t17/ac",
                    nome: "Stock Car AC"
                },
                {
                    path: "t17/acc",
                    nome: "GT3 ACC"
                }
            ]
        },
        {
            id: 4,
            nome: "Regulamento",
            path: "regulamento"
        },
        {
            id: 5,
            nome: "Tabelas",
            path: "tabelas"
        },
        {
            id: 6,
            nome: "Análises",
            path: "analises"
        },
        {
            id: 7,
            nome: "A RPM Esports",
            path: "sobre"
        }
    ]

    return (
        <nav className={styles.barraNav}>
            <ul className={styles.barraNav__lista}>
                {itensMenu.map(item => (
                    item.submenu
                        ? <MenuOpcoes key={item.id} nome={item.nome} opcoes={item.submenu} />
                        : <li key={item.id}>
                            <LinkInterno
                                path={item.path}
                                estilo="itemMenu"
                            >
                                {item.nome}
                            </LinkInterno>
                        </li>

                ))}
            </ul>
        </nav>
    )
}

export default BarraNav;