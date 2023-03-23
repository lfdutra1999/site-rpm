const ListarPistas = ({ pistas }) => {
    return (
        <div>
            <h2>Pistas</h2>
            <table>
                <thead>
                    <tr>
                        <th>Imagem</th>
                        <th>Nome</th>
                        <th>Pais</th>
                    </tr>
                </thead>
                <tbody>
                    {pistas.map(pista => (
                        <tr key={pista.uuid}>
                            <td><img style={{maxWidth: "120px"}} src={pista?.imagem} alt=""/></td>
                            <td>{pista?.nome}</td>
                            <td>{pista?.pais}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListarPistas;