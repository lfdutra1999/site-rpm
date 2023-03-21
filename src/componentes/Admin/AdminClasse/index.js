import Abas from 'componentes/Abas';
import Aba from 'componentes/Abas/Aba';
import { useState } from 'react';
import EditarClasses from './EditarClasse';
import ListarClasses from './ListarClasse';
import NovaClasse from './NovaClasse';

const AdminClasse = ({ classes, setClasses }) => {
    const [opcao, setOpcao] = useState('nova')


    return (
        <div>
            <h2>Administrar Classes</h2>
            <Abas>
                <Aba selecionado={opcao === 'nova'} onClick={() => setOpcao('nova')}>Nova</Aba>
                <Aba selecionado={opcao === 'editar'} onClick={() => setOpcao('editar')}>Editar</Aba>
                <Aba selecionado={opcao === 'listar'} onClick={() => setOpcao('listar')}>Listar</Aba>
            </Abas>
            {opcao === 'nova' ? <NovaClasse classes={classes} setClasses={setClasses} /> : ''}
            {opcao === 'editar' ? <EditarClasses classes={classes} setClasses={setClasses} /> : ''}
            {opcao === 'listar' ? <ListarClasses classes={classes} /> : ''}
        </div>
    )
}

export default AdminClasse;