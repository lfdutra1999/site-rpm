import { useState } from "react";
import api from "services/api";
import FormularioCategoria from "../FormularioCategoria";

const NovaCategoria = ({ grids }) => {
    const [categoria, setCategoria] = useState({})
    const [gridSelecionado, setGridSelecionado] = useState({})

    const cadastrarCategoria = (novaCategoria) => {
        api.post(`/pista?uuid=${novaCategoria.uuid}`, novaCategoria)
            .then(() => {
                setCategoria(novaCategoria)
            })
            .catch(erro => {
                console.log('Ocorreu um erro inesperado' + erro)
            })
    }

    const aoAlterarGrid = (evento) => {
        const gridSelecionado2 = grids.filter(grid => grid.uuid === evento.target.value)
        setGridSelecionado(gridSelecionado2[0])
    }

    return (
        <div>
            <select onChange={evento => aoAlterarGrid(evento)}>
                <option value={null} key='1'>Selecione um grid</option>
                {grids.map(grid => <option key={grid.uuid} value={grid.uuid}>{grid.nome}</option>)}
            </select>
            <FormularioCategoria pista={categoria} grid={gridSelecionado} aoSubmeter={cadastrarCategoria} />
        </div>
    )
}

export default NovaCategoria;