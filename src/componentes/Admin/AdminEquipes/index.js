import Abas from 'componentes/Abas';
import Aba from 'componentes/Abas/Aba';
import { useState } from 'react';
import styles from './AdminEquipes.module.scss';
import NovaEquipe from './NovaEquipe';

const AdminEquipes = ({ admin }) => {
    const [opcao, setOpcao] = useState('nova')


    return (
        <div className={styles.adminEquipes}>
            <h2>Administrar Equipes</h2>
            <Abas>
                <Aba selecionado={opcao === 'nova'} onClick={() => setOpcao('nova')}>Nova</Aba>
                <Aba selecionado={opcao === 'editar'} onClick={() => setOpcao('editar')}>Editar</Aba>
            </Abas>
            {opcao === 'nova' ? <NovaEquipe /> : ''}
        </div>
    )
}

export default AdminEquipes;