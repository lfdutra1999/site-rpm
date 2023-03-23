import ClasseImagem from "componentes/ClasseImagem";

const ListarClasses = ({ classes }) => {
    return (
        <div>
            <h2>Classes</h2>
            <table>
                <thead>
                    <tr>
                        <th>Imagem</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {classes.map(classe => (
                        <tr key={classe.uuid}>
                            <td><ClasseImagem imagem={classe?.imagem}/></td>
                            <td>{classe?.nome}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListarClasses;