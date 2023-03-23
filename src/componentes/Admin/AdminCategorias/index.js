import Abas from 'componentes/Abas';
import Aba from 'componentes/Abas/Aba';
import { useState } from 'react';
import NovaCategoria from './NovaCategoria';



const AdminCategorias = ({ grids }) => {
    const [opcao, setOpcao] = useState('nova')

    return (
        <div>
            <h2>Administrar Categorias</h2>
            <Abas>
                <Aba selecionado={opcao === 'nova'} onClick={() => setOpcao('nova')}>Nova</Aba>
                <Aba selecionado={opcao === 'editar'} onClick={() => setOpcao('editar')}>Editar</Aba>
                <Aba selecionado={opcao === 'listar'} onClick={() => setOpcao('listar')}>Listar</Aba>
            </Abas>
            {opcao === 'nova' ? <NovaCategoria grids={grids} /> : ''}
            {/* {opcao === 'editar' ? <EditarPista pistas={pistas} setPistas={setPistas} /> : ''}
            {opcao === 'listar' ? <ListarPistas pistas={pistas} /> : ''} */}
        </div>
    )
}

export default AdminCategorias;