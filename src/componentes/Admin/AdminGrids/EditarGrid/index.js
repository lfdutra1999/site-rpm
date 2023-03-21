import { useState } from "react";
import api from "services/api";
import FormularioGrid from "../FormularioGrid";

const EditarGrid = ({ temporadas, grids, setGrids }) => {
    const [grid, setGrid] = useState(grids[0]);

    const alterarGrid = (novoGrid) => {
        api.put(`/grid?uuid=${novoGrid.uuid}`, novoGrid)
            .then(() => {
                setGrid(novoGrid)
                const gridsAtualizados = grids.filter(grid => grid.uuid !==  novoGrid.uuid)
                setGrids([...gridsAtualizados, novoGrid])
            })
            .catch(erro => {
                console.log('Ocorreu um erro inesperado' + erro)
            })
    }



    return (
        <div>
            <FormularioGrid temporadas={temporadas} grid={grid} aoSubmeter={alterarGrid} />
        </div>
    )
}

export default EditarGrid;