const ListarTemporadas = ({temporadas}) => {
    return (
        <div>
            <h2>Temporadas</h2>
            <table>
                <thead>
                    <tr>
                        <th>Temporada</th>
                        <th>Data de inicio</th>
                        <th>Data de fim</th>
                    </tr>
                </thead>
                <tbody>
                    {temporadas.map(temporada => (
                        <tr key={temporada.uuid}>
                            <td>{temporada?.nome}</td>
                            <td>{temporada?.dtInicio}</td>
                            <td>{temporada?.dtFim}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListarTemporadas;