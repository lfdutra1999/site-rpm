import Abas from 'componentes/Abas';
import Aba from 'componentes/Abas/Aba';
import { useState } from 'react';
import EditarCarro from './EditarCarros';
import ListarCarros from './ListarCarro';
import NovoCarro from './NovoCarro';


const AdminCarro = ({ carros, setCarros, classes, setClasses }) => {
    const [opcao, setOpcao] = useState('novo')
    
    return (
        <div>
            <h2>Administrar Carros</h2>
            <Abas>
                <Aba selecionado={opcao === 'novo'} onClick={() => setOpcao('novo')}>Novo</Aba>
                <Aba selecionado={opcao === 'editar'} onClick={() => setOpcao('editar')}>Editar</Aba>
                <Aba selecionado={opcao === 'listar'} onClick={() => setOpcao('listar')}>Listar</Aba>
            </Abas>
            {opcao === 'novo' ? <NovoCarro classes={classes} /> : ''}
            {opcao === 'editar' ? <EditarCarro carros={carros} setCarros={setCarros} classes={classes} setClasses={setClasses} /> : ''}
            {opcao === 'listar' ? <ListarCarros carros={carros} classes={classes} /> : ''}
        </div>
    )
}

export default AdminCarro;