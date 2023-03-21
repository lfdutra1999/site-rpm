const ListarGrids = ({grids, temporadas}) => {
    return (
        <div>
            <h2>Grids</h2>
            <table>
                <thead>
                    <tr>
                        <th>Temporada</th>
                        <th>Nome</th>
                        <th>Simulador</th>
                        <th>Dia da Semana</th>
                        <th>Link On Board</th>
                    </tr>
                </thead>
                <tbody>
                    {grids.map(grid => (
                        <tr key={grid.uuid}>
                            <td>{temporadas.map(temporada => temporada.uuid === grid.temporada_uuid ? temporada.nome : '')}</td>
                            <td>{grid?.nome}</td>
                            <td>{grid?.simulador}</td>
                            <td>{grid?.diaDaSemana}</td>
                            <td><a href={grid?.linkOnboard}>{grid?.linkOnboard}</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListarGrids;