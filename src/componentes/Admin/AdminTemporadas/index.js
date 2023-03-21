import Abas from 'componentes/Abas';
import Aba from 'componentes/Abas/Aba';
import { useState } from 'react';
import styles from './AdminTemporadas.module.scss';
import EditarTemporadas from './EditarTemporadas';
import ListarTemporadas from './ListarTemporadas';
import NovaTemporda from './NovaTemporada';

const AdminTemporadas = ( {temporadas, setTemporadas}) => {
    const [opcao, setOpcao] = useState('nova')
    

    return (
        <div className={styles.adminTemporadas}>
            <h2>Administrar Equipes</h2>
            <Abas>
                <Aba selecionado={opcao === 'nova'} onClick={() => setOpcao('nova')}>Nova</Aba>
                <Aba selecionado={opcao === 'editar'} onClick={() => setOpcao('editar')}>Editar</Aba>
                <Aba selecionado={opcao === 'listar'} onClick={() => setOpcao('listar')}>Listar</Aba>
            </Abas>
            {opcao === 'nova' ? <NovaTemporda temporadas={temporadas} setTemporadas={setTemporadas}/> : ''}
            {opcao === 'editar' ? <EditarTemporadas temporadas={temporadas} setTemporadas={setTemporadas} /> : ''}
            {opcao === 'listar' ? <ListarTemporadas temporadas={temporadas} /> : ''}
        </div>
    )
}

export default AdminTemporadas;