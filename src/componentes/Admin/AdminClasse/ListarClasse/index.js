const ListarClasses = ({ classes }) => {
    return (
        <div>
            <h2>Classes</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {classes.map(classe => (
                        <tr key={classe.uuid}>
                            <td>{classe?.nome}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListarClasses;