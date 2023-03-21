import Abas from 'componentes/Abas';
import Aba from 'componentes/Abas/Aba';
import { useState } from 'react';
import EditarGrid from './EditarGrid';
import ListarGrids from './ListarGrids';
import NovoGrid from './NovoGrid';


const AdminGrids = ({ temporadas, grids, setGrids }) => {
    const [opcao, setOpcao] = useState('novo')


    return (
        <div>
            <h2>Administrar Grids</h2>
            <Abas>
                <Aba selecionado={opcao === 'novo'} onClick={() => setOpcao('novo')}>Novo</Aba>
                <Aba selecionado={opcao === 'editar'} onClick={() => setOpcao('editar')}>Editar</Aba>
                <Aba selecionado={opcao === 'listar'} onClick={() => setOpcao('listar')}>Listar</Aba>
            </Abas>
            {opcao === 'novo' ? <NovoGrid temporadas={temporadas} grids={grids} setGrids={setGrids} /> : ''}
            {opcao === 'editar' ? <EditarGrid temporadas={temporadas} grids={grids} setGrids={setGrids} /> : ''}
            {opcao === 'listar' ? <ListarGrids grids={grids} temporadas={temporadas} /> : ''}
        </div>
    )
}

export default AdminGrids;