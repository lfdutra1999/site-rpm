import LinkInterno from 'componentes/LinkInterno';
import styles from './BarraNav.module.scss';

const BarraNav = () => {
    const itensMenu = [
        {
            id: 1,
            nome: "Inicio",
            path: "inicio"
        },
        {
            id: 3,
            nome: "Inscriçao",
            path: "inscricao"
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
                    <li key={item.id}>
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