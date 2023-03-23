import ClasseImagem from "componentes/ClasseImagem";
import ImagemCarro from "componentes/ImagemCarro";

const ListarCarros = ({ carros, classes }) => {
    console.log(classes)
    return (
        <div>
            <h2>Carros</h2>
            <table>
                <thead>
                    <tr>
                        <th>Classe</th>
                        <th>Imagem</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {carros.map(carro => (
                        <tr key={carro.uuid}>
                            <td>{classes.map(classe => classe.uuid === carro.classeUuid ? <ClasseImagem imagem={classe.imagem} key={classe.uuid} /> : '')}</td>
                            <td><ImagemCarro imagem={carro?.imagem} /></td>
                            <td>{carro?.nome}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListarCarros;