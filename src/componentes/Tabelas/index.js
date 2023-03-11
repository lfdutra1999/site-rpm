import ListaSuspensa from 'componentes/ListaSuspensa';
import Tabela from 'componentes/Tabela';
import styles from './Tabelas.module.scss';

const Tabelas = () => {
    return (
        <div className={styles.tabelas}>
            <h2 className={styles.tabelas__titulo}>Tabelas</h2>
            <ListaSuspensa />
            <Tabela />
        </div>
    )
}

export default Tabelas;