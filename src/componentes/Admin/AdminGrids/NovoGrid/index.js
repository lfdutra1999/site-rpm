import { useState } from "react";
import api from "services/api";
import FormularioGrid from "../FormularioGrid";

const NovoGrid = ({ temporadas, grids, setGrids }) => {
    const [grid, setGrid] = useState();

    const cadastrarGrid = (novoGrid) => {
        api.post(`/grid?uuid=${novoGrid.uuid}`, novoGrid)
            .then(() => {
                setGrid(novoGrid)
                setGrids([...grids, novoGrid])
            })
            .catch(erro => {
                console.log('Ocorreu um erro inesperado' + erro)
            })
    }



    return (
        <div>
            <FormularioGrid temporadas={temporadas} grid={grid} aoSubmeter={cadastrarGrid} />
        </div>
    )
}

export default NovoGrid;